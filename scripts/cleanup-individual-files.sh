#!/bin/bash

# Remove individual Go files, keep only combined.go
# Usage: ./scripts/cleanup-individual-files.sh

echo "🧹 Cleaning up individual Go files, keeping only combined.go..."

CODE_DIR="public/code/bubbletea"
count=0
total=0
removed_files=0

# Count total directories
for dir in "$CODE_DIR"/*/; do
    if [[ -d "$dir" ]]; then
        ((total++))
    fi
done

echo "📊 Found $total example directories to clean"

# Process each example directory
for dir in "$CODE_DIR"/*/; do
    if [[ -d "$dir" ]]; then
        example_name=$(basename "$dir")
        ((count++))
        
        echo "[$count/$total] Cleaning: $example_name"
        
        # Remove all .go files except combined.go
        for go_file in "$dir"*.go; do
            if [[ -f "$go_file" ]]; then
                filename=$(basename "$go_file")
                if [[ "$filename" != "combined.go" ]]; then
                    rm "$go_file"
                    echo "    🗑️  Removed: $filename"
                    ((removed_files++))
                fi
            fi
        done
        
        # Check if combined.go exists
        if [[ -f "$dir/combined.go" ]]; then
            echo "    ✅ Kept: combined.go"
        else
            echo "    ❌ Warning: No combined.go found"
        fi
    fi
done

echo ""
echo "🎉 Cleanup complete!"
echo "📊 Removed $removed_files individual files"
echo "💾 Kept only combined.go files for each example"