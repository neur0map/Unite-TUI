#!/bin/bash

# Generate JSON index of all extracted Go code
# Usage: ./scripts/generate-code-index.sh

echo "📝 Generating code index..."

EXAMPLES_DIR="public/img/bubbletea/examples"
CODE_DIR="public/code/bubbletea"
INDEX_FILE="$CODE_DIR/index.json"

echo "[" > "$INDEX_FILE"

count=0
total=0

# Count total examples with combined.go
for dir in "$EXAMPLES_DIR"/*/; do
    if [[ -d "$dir" ]]; then
        example_name=$(basename "$dir")
        combined_file="$CODE_DIR/$example_name/combined.go"
        if [[ -f "$combined_file" ]]; then
            ((total++))
        fi
    fi
done

# Process each example
for dir in "$EXAMPLES_DIR"/*/; do
    if [[ -d "$dir" ]]; then
        example_name=$(basename "$dir")
        main_file="$dir/main.go"
        
        combined_file="$CODE_DIR/$example_name/combined.go"
        if [[ -f "$combined_file" ]]; then
            ((count++))
            
            # Get combined file size and count original files from header
            combined_size=$(wc -l < "$combined_file" 2>/dev/null || echo "0")
            file_count=$(grep -c "^// === .* ===$" "$combined_file" 2>/dev/null || echo "1")
            
            # Add to JSON
            echo "  {" >> "$INDEX_FILE"
            echo "    \"name\": \"$example_name\"," >> "$INDEX_FILE"
            echo "    \"combined_file\": \"combined.go\"," >> "$INDEX_FILE"
            echo "    \"combined_lines\": $combined_size," >> "$INDEX_FILE"
            echo "    \"file_count\": $file_count," >> "$INDEX_FILE"
            echo "    \"code_url\": \"/code/bubbletea/$example_name\"," >> "$INDEX_FILE"
            echo "    \"github_url\": \"https://github.com/charmbracelet/bubbletea/tree/main/examples/$example_name\"" >> "$INDEX_FILE"
            
            if [[ $count -lt $total ]]; then
                echo "  }," >> "$INDEX_FILE"
            else
                echo "  }" >> "$INDEX_FILE"
            fi
        fi
    fi
done

echo "]" >> "$INDEX_FILE"

echo "✅ Code index generated: $INDEX_FILE"
echo "📊 Indexed $count examples with Go code"