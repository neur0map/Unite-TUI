interface Example {
  name: string
  title: string
  description: string
  category: string
  tags: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  hasVideo: boolean
  videoType: 'gif' | 'mp4'
}

export const useExamples = () => {
  // Complete example data based on actual folder structure
  const examples: Example[] = [
    // Basic Examples
    {
      name: 'simple',
      title: 'Simple Hello World',
      description: 'A simple program that counts down from 5 and then exits.',
      category: 'Basics',
      tags: ['hello world', 'basic', 'getting started', 'countdown'],
      difficulty: 'beginner',
      hasVideo: true,
      videoType: 'gif'
    },

    // Input Components
    {
      name: 'textinput',
      title: 'Text Input',
      description: 'Interactive text input field with validation and styling.',
      category: 'Input Components',
      tags: ['input', 'text', 'forms', 'validation'],
      difficulty: 'beginner',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'textinputs',
      title: 'Multiple Text Inputs',
      description: 'Form with multiple text input fields and navigation between them.',
      category: 'Input Components',
      tags: ['input', 'forms', 'navigation', 'multiple'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'textarea',
      title: 'Text Area',
      description: 'Multi-line text input with scroll support and word wrapping.',
      category: 'Input Components',
      tags: ['textarea', 'multiline', 'text'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'autocomplete',
      title: 'Autocomplete Input',
      description: 'Text input with live autocomplete suggestions.',
      category: 'Input Components',
      tags: ['autocomplete', 'suggestions', 'input'],
      difficulty: 'intermediate',
      hasVideo: false,
      videoType: 'gif'
    },

    // Lists and Tables
    {
      name: 'list-simple',
      title: 'Simple List',
      description: 'Basic selectable list component with keyboard navigation.',
      category: 'Lists & Tables',
      tags: ['list', 'selection', 'navigation'],
      difficulty: 'beginner',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'list-default',
      title: 'Default List',
      description: 'Feature-rich list with filtering, pagination, and custom styling.',
      category: 'Lists & Tables',
      tags: ['list', 'filtering', 'pagination'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'list-fancy',
      title: 'Fancy List',
      description: 'Advanced list component with icons, descriptions, and animations.',
      category: 'Lists & Tables',
      tags: ['list', 'advanced', 'animations'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'table',
      title: 'Data Table',
      description: 'Sortable data table with column headers and row selection.',
      category: 'Lists & Tables',
      tags: ['table', 'data', 'sorting'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'table-resize',
      title: 'Resizable Table',
      description: 'Dynamic table that adapts to terminal window size changes.',
      category: 'Lists & Tables',
      tags: ['table', 'responsive', 'resize'],
      difficulty: 'advanced',
      hasVideo: false,
      videoType: 'gif'
    },

    // Progress and Loading
    {
      name: 'spinner',
      title: 'Loading Spinner',
      description: 'Animated loading spinner with customizable styles.',
      category: 'Progress & Loading',
      tags: ['spinner', 'loading', 'animation'],
      difficulty: 'beginner',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'spinners',
      title: 'Multiple Spinners',
      description: 'Collection of different spinner styles and animations.',
      category: 'Progress & Loading',
      tags: ['spinner', 'collection', 'styles'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'progress-static',
      title: 'Static Progress Bar',
      description: 'Simple progress bar with percentage display.',
      category: 'Progress & Loading',
      tags: ['progress', 'bar', 'percentage'],
      difficulty: 'beginner',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'progress-animated',
      title: 'Animated Progress',
      description: 'Smooth animated progress bar with color transitions.',
      category: 'Progress & Loading',
      tags: ['progress', 'animation', 'smooth'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'progress-download',
      title: 'Download Progress',
      description: 'Real-world download progress indicator with speed and ETA.',
      category: 'Progress & Loading',
      tags: ['progress', 'download', 'real-time'],
      difficulty: 'advanced',
      hasVideo: false,
      videoType: 'gif'
    },

    // Navigation and Layout
    {
      name: 'tabs',
      title: 'Tab Navigation',
      description: 'Tabbed interface with keyboard navigation and content switching.',
      category: 'Navigation & Layout',
      tags: ['tabs', 'navigation', 'switching'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'views',
      title: 'Multiple Views',
      description: 'Application with multiple view states and transitions.',
      category: 'Navigation & Layout',
      tags: ['views', 'states', 'transitions'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'split-editors',
      title: 'Split Screen Editors',
      description: 'Side-by-side text editors with synchronized scrolling.',
      category: 'Navigation & Layout',
      tags: ['split', 'editors', 'sync'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'pager',
      title: 'Content Pager',
      description: 'Scrollable content viewer similar to less/more commands.',
      category: 'Navigation & Layout',
      tags: ['pager', 'scroll', 'content'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'paginator',
      title: 'Page Navigation',
      description: 'Pagination component for navigating through multiple pages.',
      category: 'Navigation & Layout',
      tags: ['pagination', 'pages', 'navigation'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'composable-views',
      title: 'Composable Views',
      description: 'Complex layout with multiple composable view components.',
      category: 'Navigation & Layout',
      tags: ['composable', 'layout', 'complex'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },

    // Interactive Examples
    {
      name: 'chat',
      title: 'Chat Interface',
      description: 'Real-time chat interface with message history and input.',
      category: 'Interactive',
      tags: ['chat', 'real-time', 'messages'],
      difficulty: 'advanced',
      hasVideo: false,
      videoType: 'gif'
    },
    {
      name: 'credit-card-form',
      title: 'Credit Card Form',
      description: 'Interactive credit card input form with validation.',
      category: 'Interactive',
      tags: ['form', 'validation', 'credit card'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'file-picker',
      title: 'File Picker',
      description: 'File system browser with selection and navigation.',
      category: 'Interactive',
      tags: ['file', 'picker', 'browser'],
      difficulty: 'intermediate',
      hasVideo: false,
      videoType: 'gif'
    },
    {
      name: 'package-manager',
      title: 'Package Manager',
      description: 'Package manager interface with installation progress.',
      category: 'Interactive',
      tags: ['package', 'manager', 'installation'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'mouse',
      title: 'Mouse Support',
      description: 'Application demonstrating mouse input and click handling.',
      category: 'Interactive',
      tags: ['mouse', 'click', 'input'],
      difficulty: 'intermediate',
      hasVideo: false,
      videoType: 'gif'
    },

    // Animation and Real-time
    {
      name: 'realtime',
      title: 'Real-time Updates',
      description: 'Live data updates with smooth animations and transitions.',
      category: 'Animation & Real-time',
      tags: ['real-time', 'live', 'updates'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'sequence',
      title: 'Command Sequence',
      description: 'Sequential command execution with progress tracking.',
      category: 'Animation & Real-time',
      tags: ['sequence', 'commands', 'progress'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'timer',
      title: 'Timer Application',
      description: 'Countdown timer with start, stop, and reset functionality.',
      category: 'Animation & Real-time',
      tags: ['timer', 'countdown', 'controls'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'stopwatch',
      title: 'Stopwatch',
      description: 'Precise stopwatch with lap times and formatting.',
      category: 'Animation & Real-time',
      tags: ['stopwatch', 'timing', 'precision'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'debounce',
      title: 'Debounced Input',
      description: 'Input field with debounced search and real-time results.',
      category: 'Animation & Real-time',
      tags: ['debounce', 'search', 'performance'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },

    // Content and Media
    {
      name: 'glamour',
      title: 'Markdown Renderer',
      description: 'Beautiful markdown rendering with syntax highlighting.',
      category: 'Content & Media',
      tags: ['markdown', 'rendering', 'glamour'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'help',
      title: 'Help System',
      description: 'Interactive help system with keyboard shortcuts display.',
      category: 'Content & Media',
      tags: ['help', 'documentation', 'shortcuts'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'result',
      title: 'Result Display',
      description: 'Formatted result display with status indicators.',
      category: 'Content & Media',
      tags: ['result', 'display', 'status'],
      difficulty: 'beginner',
      hasVideo: true,
      videoType: 'gif'
    },

    // System Integration
    {
      name: 'exec',
      title: 'Command Execution',
      description: 'Execute external commands with output capture.',
      category: 'System Integration',
      tags: ['exec', 'commands', 'output'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'pipe',
      title: 'Pipe Input',
      description: 'Handle piped input from other commands or processes.',
      category: 'System Integration',
      tags: ['pipe', 'input', 'stdin'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'http',
      title: 'HTTP Client',
      description: 'HTTP request client with progress and response display.',
      category: 'System Integration',
      tags: ['http', 'client', 'requests'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'send-msg',
      title: 'Message Sending',
      description: 'Send messages between different parts of the application.',
      category: 'System Integration',
      tags: ['messages', 'communication', 'events'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'tui-daemon-combo',
      title: 'TUI + Daemon',
      description: 'Combination of TUI frontend with background daemon process.',
      category: 'System Integration',
      tags: ['daemon', 'background', 'combo'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },

    // Advanced Features
    {
      name: 'altscreen-toggle',
      title: 'Alt Screen Toggle',
      description: 'Toggle between normal and alternate screen buffers.',
      category: 'Advanced Features',
      tags: ['altscreen', 'toggle', 'buffers'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'fullscreen',
      title: 'Fullscreen Mode',
      description: 'Enter and exit fullscreen terminal mode.',
      category: 'Advanced Features',
      tags: ['fullscreen', 'mode', 'terminal'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'window-size',
      title: 'Window Resize',
      description: 'Handle terminal window resize events dynamically.',
      category: 'Advanced Features',
      tags: ['resize', 'window', 'dynamic'],
      difficulty: 'intermediate',
      hasVideo: false,
      videoType: 'gif'
    },
    {
      name: 'focus-blur',
      title: 'Focus and Blur',
      description: 'Handle terminal focus and blur events.',
      category: 'Advanced Features',
      tags: ['focus', 'blur', 'events'],
      difficulty: 'intermediate',
      hasVideo: false,
      videoType: 'gif'
    },
    {
      name: 'suspend',
      title: 'Process Suspension',
      description: 'Handle process suspension and resume (Ctrl+Z).',
      category: 'Advanced Features',
      tags: ['suspend', 'process', 'signals'],
      difficulty: 'advanced',
      hasVideo: false,
      videoType: 'gif'
    },
    {
      name: 'prevent-quit',
      title: 'Prevent Quit',
      description: 'Prevent accidental application termination with confirmation.',
      category: 'Advanced Features',
      tags: ['quit', 'confirmation', 'prevention'],
      difficulty: 'intermediate',
      hasVideo: false,
      videoType: 'gif'
    },
    {
      name: 'set-window-title',
      title: 'Window Title',
      description: 'Set and update the terminal window title dynamically.',
      category: 'Advanced Features',
      tags: ['title', 'window', 'dynamic'],
      difficulty: 'beginner',
      hasVideo: false,
      videoType: 'gif'
    },
    {
      name: 'cellbuffer',
      title: 'Cell Buffer',
      description: 'Low-level cell buffer manipulation for custom rendering.',
      category: 'Advanced Features',
      tags: ['buffer', 'cells', 'rendering'],
      difficulty: 'advanced',
      hasVideo: false,
      videoType: 'gif'
    }
  ]

  // Utility functions
  const getExampleByName = (name: string): Example | undefined => {
    return examples.find(example => example.name === name)
  }

  const getAllExamples = (): Example[] => {
    return examples
  }

  const getExamplesByCategory = (category: string): Example[] => {
    return examples.filter(example => example.category === category)
  }

  const getCategories = (): string[] => {
    return [...new Set(examples.map(example => example.category))]
  }

  const getExamplesByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced'): Example[] => {
    return examples.filter(example => example.difficulty === difficulty)
  }

  const searchExamples = (query: string): Example[] => {
    const lowercaseQuery = query.toLowerCase()
    return examples.filter(example => 
      example.title.toLowerCase().includes(lowercaseQuery) ||
      example.description.toLowerCase().includes(lowercaseQuery) ||
      example.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  }

  return {
    examples,
    getExampleByName,
    getAllExamples,
    getExamplesByCategory,
    getCategories,
    getExamplesByDifficulty,
    searchExamples
  }
}