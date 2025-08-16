#!/bin/bash

# Large thumbnail generation - preserves more detail with bigger dimensions
# Usage: ./scripts/generate-thumbnails-large.sh

echo "🎬 Large thumbnail generation (preserves detail with bigger size)"

EXAMPLES_DIR="public/img/bubbletea/examples"
count=0
total=0

# Count total GIFs
for dir in "$EXAMPLES_DIR"/*/; do
    if [[ -d "$dir" ]]; then
        gif_file="$dir"$(basename "$dir").gif
        if [[ -f "$gif_file" ]]; then
            ((total++))
        fi
    fi
done

echo "📊 Found $total GIF files to process"

# Process each example directory
for dir in "$EXAMPLES_DIR"/*/; do
    if [[ -d "$dir" ]]; then
        example_name=$(basename "$dir")
        gif_file="$dir$example_name.gif"
        thumbnail_file="$dir/thumbnail.webp"
        
        if [[ -f "$gif_file" ]]; then
            ((count++))
            echo "[$count/$total] Processing: $example_name"
            
            # Try different time points until we get a good thumbnail
            for time_point in 3 1 0; do
                # Scale to fit within 600x400 for better detail preservation
                ffmpeg -i "$gif_file" \
                       -ss "$time_point" \
                       -vframes 1 \
                       -vf "scale=w='if(gt(iw/ih,600/400),600,-1)':h='if(gt(iw/ih,600/400),-1,400)':flags=lanczos" \
                       -c:v libwebp \
                       -quality 90 \
                       -preset picture \
                       -y \
                       "$thumbnail_file" \
                       2>/dev/null
                
                # Check if thumbnail was created and has content
                if [[ -f "$thumbnail_file" && -s "$thumbnail_file" ]]; then
                    gif_size=$(du -h "$gif_file" | cut -f1)
                    webp_size=$(du -h "$thumbnail_file" | cut -f1)
                    
                    # Get dimensions to show scaling result
                    dimensions=$(ffprobe -v quiet -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "$thumbnail_file" 2>/dev/null)
                    echo "    ✅ $gif_size → $webp_size ${dimensions} (frame: ${time_point}s)"
                    break
                fi
            done
            
            # If still no valid thumbnail
            if [[ ! -f "$thumbnail_file" || ! -s "$thumbnail_file" ]]; then
                echo "    ❌ Failed to create thumbnail for $gif_file"
            fi
        fi
    fi
done

echo ""
echo "🎉 Large thumbnail generation complete!"
echo "📝 All thumbnails preserve maximum detail with larger size"
echo "📐 Max dimensions: 600x400px, maintains original aspect ratio"