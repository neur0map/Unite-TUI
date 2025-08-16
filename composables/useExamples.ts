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
  // Example data mapped from the existing folder structure
  const examples: Example[] = [
    // Basic Components
    {
      name: 'simple',
      title: 'Simple Hello World',
      description: 'A basic BubbleTea application that displays text and handles quit commands.',
      category: 'Basics',
      tags: ['hello world', 'basic', 'getting started'],
      difficulty: 'beginner',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'textinput',
      title: 'Text Input',
      description: 'Interactive text input field with validation and styling.',
      category: 'Input Components',
      tags: ['input', 'text', 'forms'],
      difficulty: 'beginner',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'textinputs',
      title: 'Multiple Text Inputs',
      description: 'Form with multiple text input fields and navigation between them.',
      category: 'Input Components',
      tags: ['input', 'forms', 'navigation'],
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
      videoType: 'mp4'
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
      hasVideo: true,
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
      hasVideo: true,
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
      videoType: 'mp4'
    },
    {
      name: 'split-editors',
      title: 'Split Screen Editors',
      description: 'Side-by-side text editors with synchronized scrolling.',
      category: 'Navigation & Layout',
      tags: ['split', 'editors', 'sync'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'mp4'
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

    // Interactive Examples
    {
      name: 'chat',
      title: 'Chat Interface',
      description: 'Real-time chat interface with message history and input.',
      category: 'Interactive',
      tags: ['chat', 'real-time', 'messages'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'mp4'
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
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'autocomplete',
      title: 'Autocomplete Input',
      description: 'Text input with live autocomplete suggestions.',
      category: 'Interactive',
      tags: ['autocomplete', 'suggestions', 'search'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'package-manager',
      title: 'Package Manager',
      description: 'TUI package manager with installation and management features.',
      category: 'Interactive',
      tags: ['package', 'manager', 'installation'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'mp4'
    },

    // Advanced Features
    {
      name: 'mouse',
      title: 'Mouse Support',
      description: 'Application with full mouse interaction support.',
      category: 'Advanced',
      tags: ['mouse', 'interaction', 'click'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'focus-blur',
      title: 'Focus Management',
      description: 'Component focus and blur event handling.',
      category: 'Advanced',
      tags: ['focus', 'blur', 'events'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'fullscreen',
      title: 'Fullscreen Mode',
      description: 'Toggle between normal and fullscreen terminal modes.',
      category: 'Advanced',
      tags: ['fullscreen', 'mode', 'toggle'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'altscreen-toggle',
      title: 'Alternate Screen',
      description: 'Switch between main and alternate terminal screens.',
      category: 'Advanced',
      tags: ['altscreen', 'terminal', 'switch'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'window-size',
      title: 'Window Resize Handling',
      description: 'Responsive layout that adapts to terminal window size.',
      category: 'Advanced',
      tags: ['resize', 'responsive', 'window'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'set-window-title',
      title: 'Window Title Control',
      description: 'Dynamically set and update terminal window title.',
      category: 'Advanced',
      tags: ['title', 'window', 'control'],
      difficulty: 'beginner',
      hasVideo: true,
      videoType: 'gif'
    },

    // Utilities and Tools
    {
      name: 'timer',
      title: 'Timer',
      description: 'Countdown timer with customizable duration and alerts.',
      category: 'Utilities',
      tags: ['timer', 'countdown', 'alerts'],
      difficulty: 'beginner',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'stopwatch',
      title: 'Stopwatch',
      description: 'Precision stopwatch with lap times and controls.',
      category: 'Utilities',
      tags: ['stopwatch', 'timing', 'laps'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'glamour',
      title: 'Markdown Renderer',
      description: 'Beautiful markdown rendering with syntax highlighting.',
      category: 'Utilities',
      tags: ['markdown', 'rendering', 'syntax'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'help',
      title: 'Help System',
      description: 'Interactive help system with keyboard shortcuts.',
      category: 'Utilities',
      tags: ['help', 'shortcuts', 'documentation'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },

    // System Integration
    {
      name: 'exec',
      title: 'Command Execution',
      description: 'Execute external commands and display output.',
      category: 'System',
      tags: ['exec', 'commands', 'output'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'pipe',
      title: 'Pipe Integration',
      description: 'Handle piped input and output in TUI applications.',
      category: 'System',
      tags: ['pipe', 'input', 'output'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'suspend',
      title: 'Process Suspension',
      description: 'Suspend and resume TUI application properly.',
      category: 'System',
      tags: ['suspend', 'resume', 'process'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'tui-daemon-combo',
      title: 'TUI + Daemon',
      description: 'Combine TUI interface with background daemon process.',
      category: 'System',
      tags: ['daemon', 'background', 'process'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'mp4'
    },
    {
      name: 'prevent-quit',
      title: 'Quit Prevention',
      description: 'Prevent accidental application exit with confirmation.',
      category: 'System',
      tags: ['quit', 'prevention', 'confirmation'],
      difficulty: 'beginner',
      hasVideo: true,
      videoType: 'gif'
    },

    // Performance and Optimization
    {
      name: 'debounce',
      title: 'Input Debouncing',
      description: 'Debounce user input for performance optimization.',
      category: 'Performance',
      tags: ['debounce', 'performance', 'input'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'realtime',
      title: 'Real-time Updates',
      description: 'Handle real-time data updates efficiently.',
      category: 'Performance',
      tags: ['realtime', 'updates', 'performance'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'mp4'
    },
    {
      name: 'cellbuffer',
      title: 'Cell Buffer',
      description: 'Low-level cell buffer manipulation for performance.',
      category: 'Performance',
      tags: ['buffer', 'cells', 'low-level'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },

    // Communication
    {
      name: 'http',
      title: 'HTTP Requests',
      description: 'Make HTTP requests and display responses in TUI.',
      category: 'Communication',
      tags: ['http', 'requests', 'api'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'send-msg',
      title: 'Message Sending',
      description: 'Send custom messages between components.',
      category: 'Communication',
      tags: ['messages', 'communication', 'components'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    },
    {
      name: 'sequence',
      title: 'Command Sequences',
      description: 'Execute sequences of commands with proper timing.',
      category: 'Communication',
      tags: ['sequence', 'commands', 'timing'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'gif'
    },

    // Architecture Patterns
    {
      name: 'composable-views',
      title: 'Composable Views',
      description: 'Build complex UIs with composable view components.',
      category: 'Architecture',
      tags: ['composable', 'views', 'architecture'],
      difficulty: 'advanced',
      hasVideo: true,
      videoType: 'mp4'
    },
    {
      name: 'result',
      title: 'Result Handling',
      description: 'Proper error and result handling patterns.',
      category: 'Architecture',
      tags: ['result', 'error', 'patterns'],
      difficulty: 'intermediate',
      hasVideo: true,
      videoType: 'gif'
    }
  ]

  // Get all examples
  const getAllExamples = (): Example[] => {
    return examples
  }

  // Get example by name
  const getExampleByName = (name: string): Example | null => {
    return examples.find(example => example.name === name) || null
  }

  // Get examples by category
  const getExamplesByCategory = (category: string): Example[] => {
    return examples.filter(example => example.category === category)
  }

  // Get examples by difficulty
  const getExamplesByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced'): Example[] => {
    return examples.filter(example => example.difficulty === difficulty)
  }

  // Get all categories
  const getAllCategories = (): string[] => {
    return [...new Set(examples.map(example => example.category))].sort()
  }

  // Search examples
  const searchExamples = (query: string): Example[] => {
    const lowercaseQuery = query.toLowerCase()
    return examples.filter(example => 
      example.title.toLowerCase().includes(lowercaseQuery) ||
      example.description.toLowerCase().includes(lowercaseQuery) ||
      example.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  }

  return {
    getAllExamples,
    getExampleByName,
    getExamplesByCategory,
    getExamplesByDifficulty,
    getAllCategories,
    searchExamples
  }
}