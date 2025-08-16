#!/bin/bash

# Extract Go code from all BubbleTea examples
# Usage: ./scripts/extract-go-code.sh

echo "🔧 Extracting Go code from BubbleTea examples..."

EXAMPLES_DIR="public/img/bubbletea/examples"
OUTPUT_DIR="public/code/bubbletea"
count=0
total=0

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Count total examples
for dir in "$EXAMPLES_DIR"/*/; do
    if [[ -d "$dir" ]]; then
        example_name=$(basename "$dir")
        main_file="$dir/main.go"
        if [[ -f "$main_file" ]]; then
            ((total++))
        fi
    fi
done

echo "📊 Found $total examples with main.go files"

# Process each example directory
for dir in "$EXAMPLES_DIR"/*/; do
    if [[ -d "$dir" ]]; then
        example_name=$(basename "$dir")
        main_file="$dir/main.go"
        
        if [[ -f "$main_file" ]]; then
            ((count++))
            echo "[$count/$total] Extracting: $example_name"
            
            # Create example output directory
            example_output="$OUTPUT_DIR/$example_name"
            mkdir -p "$example_output"
            
            # Copy main.go with cleaner name
            cp "$main_file" "$example_output/main.go"
            
            # Copy any additional Go files
            for go_file in "$dir"/*.go; do
                if [[ -f "$go_file" && $(basename "$go_file") != "main.go" ]]; then
                    filename=$(basename "$go_file")
                    cp "$go_file" "$example_output/$filename"
                    echo "    📄 Additional file: $filename"
                fi
            done
            
            # Create a combined code file for easy reading
            combined_file="$example_output/combined.go"
            echo "// $example_name - BubbleTea Example" > "$combined_file"
            echo "// Combined Go source code" >> "$combined_file"
            echo "" >> "$combined_file"
            
            # Add main.go content
            echo "// === main.go ===" >> "$combined_file"
            cat "$main_file" >> "$combined_file"
            
            # Add other Go files if they exist
            for go_file in "$dir"/*.go; do
                if [[ -f "$go_file" && $(basename "$go_file") != "main.go" ]]; then
                    filename=$(basename "$go_file")
                    echo "" >> "$combined_file"
                    echo "// === $filename ===" >> "$combined_file"
                    cat "$go_file" >> "$combined_file"
                fi
            done
            
            file_size=$(du -h "$combined_file" | cut -f1)
            echo "    ✅ Combined code: $file_size"
        fi
    fi
done

echo ""
echo "🎉 Go code extraction complete!"
echo "📁 Code files saved to: $OUTPUT_DIR/"
echo "📝 Each example has:"
echo "   • main.go (original file)"
echo "   • combined.go (all files merged)"
echo "   • Additional .go files if present"