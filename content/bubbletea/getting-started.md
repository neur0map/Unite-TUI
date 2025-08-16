---
seo:
  title: Getting Started with BubbleTea - Unite UI
  description: Learn how to get started with BubbleTea and Unite UI for building beautiful terminal user interfaces
  image: /logo.png
---

::page-wrapper
  :::page-header{title="Getting Started with BubbleTea"}
  :::

  :::page-divider
  :::

  :::doc-wrapper
    ::::doc-article{title="Introduction"}
    BubbleTea is a powerful and fun framework for building terminal user interfaces (TUIs) in Go. It's based on The Elm Architecture, making it simple to build complex terminal applications with a clear separation of concerns.

    Unite UI provides a comprehensive set of prebuilt components that work seamlessly with BubbleTea, allowing you to create beautiful terminal interfaces quickly.
    ::::

    ::::doc-article{title="Installation"}
    Getting started with BubbleTea is straightforward. First, ensure you have Go installed on your system (version 1.18 or later).

    Install BubbleTea using Go modules:

    ```bash
    go get github.com/charmbracelet/bubbletea
    ```

    Then install Unite UI components:

    ```bash
    go get github.com/unite-ui/unite
    ```
    ::::

    ::::doc-article{title="Your First BubbleTea Program"}
    Let's create a simple "Hello World" program to understand the basics of BubbleTea.

    Create a new file called `main.go`:

    ```go
    package main

    import (
        "fmt"
        "os"

        tea "github.com/charmbracelet/bubbletea"
    )

    // Model represents the application state
    type model struct {
        message string
    }

    // Init returns the initial command for the application
    func (m model) Init() tea.Cmd {
        return nil
    }

    // Update handles messages and updates the model
    func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
        switch msg := msg.(type) {
        case tea.KeyMsg:
            switch msg.String() {
            case "q", "ctrl+c":
                return m, tea.Quit
            }
        }
        return m, nil
    }

    // View renders the UI based on the model
    func (m model) View() string {
        return fmt.Sprintf("Hello from BubbleTea!\n\nPress 'q' to quit.\n")
    }

    func main() {
        p := tea.NewProgram(model{message: "Hello World"})
        if _, err := p.Run(); err != nil {
            fmt.Printf("Error: %v", err)
            os.Exit(1)
        }
    }
    ```

    To run your program:

    ```bash
    go run main.go
    ```
    ::::

    ::::doc-article{title="Understanding The Elm Architecture"}
    BubbleTea follows The Elm Architecture, which consists of three main components:

    - **Model** - The state of your application. This contains all the data your application needs.
    - **Update** - A function that handles incoming messages and updates the model accordingly. This is where your application logic lives.
    - **View** - A function that renders the UI based on the current model state. It returns a string that represents what the user sees.

    This architecture creates a unidirectional data flow that makes your applications predictable and easy to debug.
    ::::

    ::::doc-article{title="Messages and Commands"}
    In BubbleTea, communication happens through messages and commands:

    **Messages** are events that occur in your application. They can be user input (keyboard, mouse), timer ticks, or custom events you define.

    **Commands** are functions that perform side effects and return messages. They're used for things like making HTTP requests, reading files, or setting timers.

    You can create custom message types and commands. For example, a `tickMsg` type can represent timer events. Commands like `tea.Tick` send messages at regular intervals. In your Update function, you handle these messages with type switches to determine the appropriate response.
    ::::

    ::::doc-article{title="Working with Unite UI Components"}
    Unite UI provides prebuilt components that integrate seamlessly with BubbleTea. Components like buttons, forms, and tables can be easily incorporated into your application.

    Here's how to use a Unite UI button component:

    ```go
    import (
        "github.com/unite-ui/unite/button"
        "github.com/unite-ui/unite/styles"
    )

    type model struct {
        button button.Model
    }

    func initialModel() model {
        btn := button.New()
        btn.Label = "Click Me!"
        btn.Style = styles.PrimaryButton()
        
        return model{
            button: btn,
        }
    }

    func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
        var cmd tea.Cmd
        
        // Update button component
        m.button, cmd = m.button.Update(msg)
        
        // Check if button was clicked
        if m.button.Clicked() {
            // Handle button click
        }
        
        return m, cmd
    }

    func (m model) View() string {
        return m.button.View()
    }
    ```

    Each component has its own Update and View methods that integrate with your BubbleTea application's lifecycle. Components can emit events that you handle in your Update function to respond to user interactions.
    ::::

    ::::doc-article{title="Next Steps"}
    Now that you understand the basics of BubbleTea, explore these topics:

    - **Components** - Learn about Unite UI's prebuilt components like forms, tables, and lists.
    - **Styling** - Discover how to style your TUI with Lipgloss and Unite UI's theme system.
    - **State Management** - Master complex state management patterns for larger applications.
    - **Testing** - Write tests for your BubbleTea applications.
    - **Examples** - Browse our collection of example applications to see BubbleTea in action.

    Check out the official BubbleTea documentation and Unite UI component library for more detailed information and advanced patterns.
    ::::
  :::
::