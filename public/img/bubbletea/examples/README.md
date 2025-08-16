# BubbleTea Examples Media

This directory contains placeholder media files for BubbleTea examples.

## Directory Structure

Each example has its own subdirectory with:
- `thumbnail.webp` - Thumbnail image for the example card
- `demo.gif` or `demo.mp4` - Demo video/animation of the example

## Placeholder Files

All files currently contain placeholder content and should be replaced with actual media:

- **thumbnail.webp**: 400x225px WebP image showing the example UI
- **demo.gif**: Animated GIF showing the example in action
- **demo.mp4**: MP4 video for more complex examples requiring video

## Examples Included

Sample directories created for:
- `simple/` - Simple Hello World example
- `textinput/` - Text input component
- `spinner/` - Loading spinner animation  
- `list-simple/` - Basic list component
- `chat/` - Chat interface (uses MP4)

## Adding New Examples

To add a new example:
1. Create a directory with the example name
2. Add `thumbnail.webp` (400x225px recommended)
3. Add `demo.gif` or `demo.mp4` depending on complexity
4. Update the `useExamples.ts` composable with example metadata

## Media Guidelines

- **Thumbnails**: Should be clear, show the UI clearly, use WebP format
- **Demos**: Should demonstrate key functionality, be concise (3-10 seconds)
- **File sizes**: Keep reasonable for web loading (thumbnails <50KB, demos <2MB)
- **Accessibility**: Include clear visual indicators of functionality