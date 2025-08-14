# TODO.md - Unite UI Website Redesign

## 🎯 Project Goal
**Unite UI** - A TUI (Terminal User Interface) library for Charmbracelet BubbleTea, providing prebuilt UI components for terminal user interfaces.

## 🚀 Main Redesign Tasks

### 1. Create New Landing Page
- [ ] Create a separate landing page distinct from current directory template
- [ ] Design hero section highlighting Unite UI's purpose
- [ ] Add sections for:
  - [ ] What is Unite UI (TUI library explanation)
  - [ ] Key features (prebuilt components, BubbleTea integration)
  - [ ] Component showcase/gallery
  - [ ] Installation guide
  - [ ] Quick start code examples
  - [ ] Documentation links
  - [ ] GitHub integration

### 2. Branding Updates
- [ ] Update site title from "DailyHub" to "Unite UI"
- [ ] Change tagline to reflect TUI library purpose
- [ ] Update color scheme to match terminal/CLI aesthetic
- [ ] Create new logo for Unite UI
- [ ] Update favicon and social media images

### 3. Content Structure Changes
- [ ] Remove current directory/listing content
- [ ] Create component documentation pages
- [ ] Add code examples with syntax highlighting
- [ ] Create interactive terminal demos (if possible)
- [ ] Add BubbleTea integration guides

## 📍 Current Structure (To Be Modified)

### Main Home Page
- **Vue Component**: `pages/index.vue`
- **Content File**: `content/index.md`

## 🎯 Sidebar Configuration

### Main Files
- **Component**: `components/Sidebar.vue`
- **Configuration**: `app.config.ts` (menus array)

### Related Components
- `components/SidebarBody.vue` - Main container
- `components/SidebarContent.vue` - Content wrapper
- `components/SidebarFooter.vue` - Footer section
- `components/SidebarMenu.vue` - Menu container
- `components/MenuItem.vue` - Individual menu items

### How to Modify Sidebar
1. **Change Menu Items**: Edit `app.config.ts` → `menus` array
   ```ts
   menus: [
     {
       subheader: null, // or "SECTION NAME"
       items: [
         {
           label: "Menu Item",
           icon: "heroicons:icon-name",
           link: "/path"
         }
       ]
     }
   ]
   ```
2. **Toggle Features**: Edit `app.config.ts`
   - `logo.show` - Show/hide logo
   - `search.show` - Show/hide search input
3. **Style Changes**: Edit `components/Sidebar.vue` directly

## 📄 Header Configuration

### Main Component
- **Location**: `components/PageHeader.vue`

### Usage in Pages
Headers are added through MDC syntax in markdown files:
```markdown
:::page-header{buy-button submit-button title="Page Title"}
:::
```

### Props Available
- `title` - Main heading text
- `submitButton` - Show/hide submit button (boolean)
- `buyButton` - Show/hide buy button (boolean)

### Related Components
- `components/SubmitTrigger.vue` - Submit button
- `components/BuyButton.vue` - Buy template button

## 🧩 Reusable Components

### Layout Components
- **PageWrapper** - Main page container
- **PageHeader** - Page header with title and actions
- **PageDivider** - Visual separator
- **Section** - Content section with optional title and link
- **SectionHeading** - Section title component
- **Divider** - Simple divider with optional label

### Content Display Components
- **Card** - Basic card with image, title, description, badge
- **FeaturedCard** - Large featured content card
- **FeaturedSection** - Container for featured cards
- **HighlightCard** - Highlight showcase card
- **HighlightSection** - Container for highlights
- **InfoSection** - Information section layout
- **InfoWrapper** - Wrapper for info sections
- **TestSection** - Test/demo section

### Navigation & Menu
- **Sidebar** - Main sidebar component
- **SidebarBody** - Sidebar body container
- **SidebarContent** - Sidebar content wrapper
- **SidebarFooter** - Sidebar footer
- **SidebarMenu** - Menu container
- **MenuItem** - Individual menu item
- **MenuButton** - Menu trigger button

### Form & Input Components
- **SearchInput** - Search input field
- **TextInput** - Text input field
- **SubmitForm** - Submission form
- **SubmitTrigger** - Submit button trigger
- **SubmitButton** - Submit form button

### Dialog/Modal Components
- **SearchDialog** - Search modal dialog
- **SearchResult** - Search results container
- **SearchResultItem** - Individual search result
- **SubmitDialog** - Submission modal dialog

### Button Components
- **Button** - Base button component
- **BuyButton** - Buy template button
- **IconButton** - Icon-only button
- **SponsorButton** - Sponsor button

### Pricing Components
- **Pricing** - Pricing container
- **PricingCard** - Individual pricing card
- **PricingSection** - Pricing section layout
- **PricingSwitch** - Pricing toggle switch
- **PricingTab** - Pricing tab item
- **PricingTabGroup** - Pricing tabs container

### Documentation Components
- **DocWrapper** - Documentation wrapper
- **DocArticle** - Documentation article

### UI Elements
- **Badge** - Badge label
- **BadgeIcon** - Badge with icon
- **LogoBrand** - Brand logo
- **SvgDiamond** - Diamond SVG icon
- **SvgLogo** - Logo SVG

## 📝 Page Creation Guide

### How Pages Work
1. **Dynamic Routing**: `pages/[...slug].vue` catches all routes
2. **Content Source**: Markdown files in `content/` directory
3. **URL Mapping**: File path = URL path
   - `content/index.md` → `/`
   - `content/about.md` → `/about`
   - `content/docs/guide.md` → `/docs/guide`

### Creating a New Page

#### Step 1: Create Markdown File
Create a new `.md` file in `content/` directory:

```markdown
---
seo:
  title: Page Title
  description: Page description for SEO
  image: /og-image.jpeg
---

::page-wrapper
  :::page-header{title="Page Title" buy-button submit-button}
  :::

  :::page-divider
  :::

  :::section{title="Section Title"}
    Your content here
  :::
::
```

#### Step 2: Use MDC Components
MDC (Markdown Components) syntax:
- `::component-name` - Block component
- `:::component-name` - Inline component
- `::::component-name` - Nested component
- `---` - Component props (YAML format)

Example with props:
```markdown
::::card
---
badge: NEW
desc: Description
image: /img/image.png
title: Card Title
to: https://example.com
---
::::
```

#### Step 3: Add to Navigation
Edit `app.config.ts` to add menu item:
```ts
{
  label: "New Page",
  icon: "heroicons:document",
  link: "/new-page"
}
```

### Adding Custom Features

#### Custom Components
1. Create component in `components/` directory
2. Component is auto-imported (no registration needed)
3. Use in markdown via MDC syntax or in Vue files

#### Adding Animations
1. **CSS Animations**: Add to `assets/css/animations.css`
2. **Page Transitions**: Configure in `nuxt.config.ts`:
   ```ts
   app: {
     pageTransition: { name: "page", mode: "out-in" }
   }
   ```
3. **Component Animations**: Use Headless UI transitions or CSS classes

#### Custom Styles
1. **Global Styles**: Edit `assets/css/style.css`
2. **Tailwind Classes**: Use in components directly
3. **Color System**: Defined in `tailwind.config.js`
   - Brand colors: `brand-1` to `brand-6`
   - Alpha colors: `alpha-5`, `alpha-10`, etc.
   - Semantic: `bg-primary`, `text-primary`, `border-alpha-5`

### File Paths Reference
```
unite-ui/
├── pages/
│   ├── index.vue          # Home page component
│   ├── [...slug].vue      # Dynamic route handler
│   └── test.vue          # Test page
├── content/
│   ├── index.md          # Home page content
│   ├── docs.md           # /docs page
│   ├── inspirations.md   # /inspirations page
│   └── [other pages].md
├── components/           # All reusable components
├── app.config.ts        # Runtime configuration
├── nuxt.config.ts       # Build configuration
└── assets/
    └── css/
        ├── main.css     # Main CSS entry
        ├── style.css    # Custom styles
        └── animations.css # Animations
```

## 🔧 Configuration Files

### app.config.ts
- Site metadata (title, description, image)
- Logo settings
- Search configuration
- Submit dialog settings
- Buy button configuration
- Navigation menus

### nuxt.config.ts
- Module configuration
- CSS imports
- PostCSS/Tailwind setup
- Image optimization
- Content module settings
- Page transitions

## 🎨 Styling System

### Color Classes
- **Backgrounds**: `bg-primary`, `bg-hover`, `bg-backdrop`
- **Text**: `text-primary`, `text-secondary`, `text-tertiary`
- **Borders**: `border-alpha-5`, `border-alpha-10`
- **Icons**: `icon-primary`, `icon-hover`

### Typography Classes
- **Headings**: `heading-1`, `heading-2`, `heading-3`, `heading-4`
- **Body**: `body-1`, `body-2`, `body-3`
- **Labels**: `label-1`, `label-2`, `label-3`

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Sidebar: Hidden on mobile, visible on `lg` and up
- Use Tailwind responsive prefixes: `lg:block`, `md:px-8`

## 📋 Quick Actions Checklist

- [ ] Change site title/branding → Edit `app.config.ts`
- [ ] Modify navigation menu → Edit `app.config.ts` → `menus`
- [ ] Create new page → Add `.md` file in `content/`
- [ ] Add new component → Create `.vue` file in `components/`
- [ ] Change color scheme → Edit `tailwind.config.js` and `assets/css/style.css`
- [ ] Update home page content → Edit `content/index.md`
- [ ] Add page animations → Edit `assets/css/animations.css`
- [ ] Configure SEO → Add frontmatter to markdown files
- [ ] Toggle features → Edit `app.config.ts` (search, submit, buy button)
- [ ] Customize header → Modify `components/PageHeader.vue`