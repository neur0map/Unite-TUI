---
seo:
  title: DailyHub - Documentation
  description: Getting started with DailyHub
  image: /og-image.jpeg
---

::page-wrapper
  :::page-header{buy-button title="Documentation"}
  :::

  :::page-divider
  :::

  :::doc-wrapper
  ::::doc-article{title="Introduction"}
  Dailyhub is a meticulously crafted directory template for your next projects. Built with Nuxt, TailwindCSS, Nuxt Content, and Nuxt Studio, it leverages the Nuxt Ecosystem to create a holistic solution for dynamic, engaging web application development.

  Every page in Dailyhub and content is integrated with Nuxt Content and Nuxt Studio, thereby CMS is already included with the template.

  **Who is this for?**

  Dailyhub caters to various project types, including listing websites, directories, and blogs, with the necessary flexibility and functionalities to deliver exceptional user experiences.

  **Whats included in the purchase?**
  - Design Figma File
  - Latest version of Dailyhub Nuxt
  - Offline Documentation
  - Lifetime Free updates to Dailyhub

  **Highlights**
  - Responsive Layout
  - Nuxt Content Integrated
  - Nuxt Studio Integrated
  - Figma File Included
  - SEO Optimized
  - Performance Optimized

  **Tech Stack**
  * Nuxt Framework (v3.14)
  * Tailwind CSS (v3.4)
  * Headless UI (v1.7)
  ::::

  ::::page-divider
  ::::

  ::::doc-article{title="Installation"}

  You will receive a zip file with the template. In the directory, you will find a directory named `dailyhub-nuxt`. Open the directory and run the following commands:

  Installing the dependencies:

  ```bash
  # npm
  npm install

  # pnpm
  pnpm install

  # yarn
  yarn install

  # bun
  bun install
  ```

  **Development Server**

  Start the development server on `http://localhost:3000`:

  ```bash
  # npm
  npm run dev

  # pnpm
  pnpm run dev

  # yarn
  yarn dev

  # bun
  bun run dev
  ```
  ::::

  ::::page-divider
  ::::

  ::::doc-article{title="Directory Structure"}
  ```
  dailyhub-nuxt/
  |   assets/css/           // Custom CSS Files
  │   │   animations.css
  │   │   main.css
  │   │   style.css
  └───components/           // Base Components
  │   │   Badge.vue
  │   │   Button.vue
  │   │   ...
  │   composables/states.ts
  └───content/              // Content for the pages
  │   │   index.md
  │   │   info.md
  │   │   ...
  └───pages/                // Pages
  │   │   [...slug].vue
  │   │   index.vue
  │   │   test.vue
  └───public/               // Public assets
  │   │   img/              // Images used in the content
  │   │   favicon.png
  │   │   og-image.jpeg
  │   │   info.png
  |   server/
  |   app.config.ts         // Application Configuration
  |   app.vue               // Main App Component
  |   error.vue             // Error Page
  |   nuxt.config.ts        // Nuxt Configuration
  |   nuxt.schema.ts        // Nuxt Studio Schema
  |   tsconfig.json         // TypeScript Configuration
  |   tailwind.config.ts    // Tailwind Configuration
  |   postcss.config.ts
  |   package.json
  |   README.md
  ```
  ::::

  ::::page-divider
  ::::

  ::::doc-article{title="Configuration"}

  There are 3 main configuration files in the project:

  - `nuxt.config.ts` - Nuxt Configuration
  - `tailwind.config.ts` - Tailwind Configuration
  - `app.config.ts` - Application Configuration

  You can find more information about the configuration in the [Nuxt Configuration](https://nuxt.com/docs/guide/directory-structure/nuxt-config) and [Tailwind Configuration](https://tailwindcss.com/docs/configuration) documentation.

  DailyHub specific configuration is in the `app.config.ts` file. This file is used to configure the default SEO, features, menus, etc.
  By features you would be able to enable or disable the features like `search`, `submit dialog`, `logo`, `cta button` and sidebar menus are also configurable.
  ::::

  ::::page-divider
  ::::

  ::::doc-article{title="Theming"}

  Dailyhub is built with TailwindCSS, so you can easily customize the colors and styles by editing the tailwind configuration and custom styles.

  `tailwind.config.ts` contains broad alpha colors and brand colors. If you want to add more colors you can do it in this file.

  `assets/style.css` contains the custom styles for the template. Specific to text styles, background, component styles.

  **Changing the Logo**

  You can change the logo by editing the `components/LogoBrand.vue` file. This component is used to display the logo in the header. You have the option of displaying only the symbol or the full logo.

  Also svg logo is available in the `components/SvgLogo.vue` file. This svg component has variants of brand, gray and diamond. This can be used everywhere in the project.
  ::::

  ::::page-divider
  ::::

  ::::doc-article{title="Content"}
  Content is the heart of Dailyhub. It is integrated with Nuxt Content and Nuxt Studio, thereby CMS is already included with the template.

  You can find the content in the `content` directory. Each markdown file is a page in the directory.

  Here is the list of pages that are already included in the template:
  ```
  dailyhub-nuxt/
  └───content/
  │   │   index.md
  │   │   info.md
  │   │   icons.md
  │   │   inspirations.md
  │   │   premium.md
  │   │   sponsor.md
  │   │   systems.md
  │   │   templates.md
  │   │   tools.md
  │   │   typography.md
  ```

  **Adding a new page**

  To add a new page, you can create a new markdown file in the `content` directory. You can also create a new directory for the page and add the markdown file to it.

  Here is the example of a new page:
  ```
  ---
  seo:
    title: My New Page
    desc: This is a new page
    image: /og-image.jpeg
  ---

  ::page-wrapper
    :::page-header{title="Category Title"}
    :::

    :::page-divider
    :::

    :::section
      ::::card
      ---
      badge: NEW
      desc: Software
      image: /img/example-thumbnail.png
      title: Example Site
      to: https://example.com/
      ---
      ::::
    :::
  ::
  ```

  Inside the markdown file you can add the content and the metadata. The metadata is used for SEO, social media, etc. MDC is used to add the page wrapper, page header, page divider, section and card components.
  ::::

  ::::page-divider
  ::::

  ::::doc-article{title="Deployment"}
  DailyHub is built with Nuxt, so you can use any of the Nuxt deployment methods. We recommend using the `generate` command to build the application for production. It will generate the static HTML files and serve them. 
  
  This way you can easily deploy the application to any static site hosting service like Vercel, Netlify, etc.

  Build the application for production:

  ```bash
  # npm
  npm run generate

  # pnpm
  pnpm run generate

  # yarn
  yarn generate

  # bun
  bun run generate
  ```

  Files will be generated in the `.output/public/` directory. You can then upload the files to your hosting service.

  Locally preview production build:

  ```bash
  # npm
  npm run preview

  # pnpm
  pnpm run preview

  # yarn
  yarn preview

  # bun
  bun run preview
  ```

  You can find more information about the deployment in the [Nuxt Deployment](https://nuxt.com/docs/getting-started/deployment) documentation.
  ::::

  ::::page-divider
  ::::

  ::::doc-article{title="Integrations"}

  Dailyhub uses modules from Nuxt Ecosystem to provide the necessary functionalities.

  - ###### Nuxt Headless UI (v1.1)

    Delivering a set of robust UI components for building accessible, customizable, and performant user interfaces.

    [Learn More](https://headlessui.com/v1/vue)

  - ###### Nuxt Content (v2.13)

    A powerful content management system that allows you to manage your content in a structured way.

    [Learn More](https://content.nuxt.com)

  - ###### Nuxt Studio (v2.2)

    Git Based CMS Interface that works great with Nuxt Content.

    [Learn More](https://nuxt.studio)

  - ###### Nuxt Icon (v0.6)

    A library for easily using icons in your project.

    [Learn More](https://icon.nuxt.com)

  - ###### Nuxt Image (v1.8)

    A library for image optimization and lazy loading.

    [Learn More](https://image.nuxt.com)

  ::::

  ::::page-divider
  ::::

  ::::doc-article{title="Components"}
  There are total of **47** components in Dailyhub. You can find the list of components in the `components` directory. Each Component is approprately named and documented.

  Adding a new component is easy. You can create a new `.vue` file in the `components/` directory and then to use it in the content you have to register it in `pages/[...slug].vue` file.
  ::::

  ::::page-divider
  ::::

  ::::doc-article{title="Feedback"}
  If you have any feedback or suggestions or you want support, please feel free to reach out to us.

  You can contact us at [info@stylokit.com](mailto:info@stylokit.com)
  ::::
  :::
::
