export default defineAppConfig({
  site: {
    title: "Unite UI - TUI Components for BubbleTea",
    description:
      "A modern Terminal User Interface (TUI) component library for Charmbracelet BubbleTea. Build beautiful terminal applications with prebuilt, customizable components.",
    image: "/og-image.jpeg",
    url: "https://unite-ui.dev",
  },
  logo: {
    show: true,
    onlySymbol: false,
    link: "/",
  },
  search: {
    show: true,
    placeholder: "Search",
  },
  submitDialog: {
    show: true,
    triggerText: "Submit",
    triggerIcon: "heroicons:cursor-arrow-rays",
    triggerVariant: "secondary",
    dialogTitle: "Submit Your TUI Design",
    dialogDescription:
      "Found a TUI design you fancy? If it clicks with us too, watch for it in our catalog!",
    form: {
      inputPlaceholder: "TUI Design URL",
      submitButtonText: "Submit",
      submitButtonIcon: "heroicons:arrow-right-solid",
      submitButtonVariant: "primary",
      successMessage: "Thank you for your submission! 🧡",
    },
  },
  buyButton: {
    show: false,
    buttonText: "Buy Template",
    buttonVariant: "primary",
    link: "https://stylokit.lemonsqueezy.com/buy/5eed5001-9087-405b-a414-d654b9597e5d",
  },
  navigation: {
    header: [
      {
        label: "Library",
        link: "/library",
        icon: "heroicons:book-open",
      },
      {
        label: "GitHub",
        link: "https://github.com/unite-ui/unite-ui",
        external: true,
        icon: "simple-icons:github",
      },
    ],
  },
  menus: [
    {
      subheader: null,
      items: [
        {
          label: "Library",
          icon: "heroicons:clock",
          link: "/library",
        },
        {
          label: "Info",
          icon: "heroicons:information-circle",
          link: "/info",
        },
        {
          label: "Patron Support",
          icon: "heroicons:heart",
          link: "/sponsor",
        },
        {
          label: "Documentation",
          icon: "heroicons:book-open",
          link: "/docs",
        },
      ],
    },
    {
      subheader: "SOURCE",
      items: [
        {
          label: "BubbleTea",
          icon: "heroicons:fire",
          link: "/bubbletea",
          children: [
            {
              label: "Getting Started",
              icon: "heroicons:play",
              link: "/bubbletea/getting-started",
            },
            {
              label: "Examples",
              icon: "heroicons:code-bracket",
              link: "/bubbletea/examples",
            },
          ],
        },
        {
          label: "Lipgloss",
          icon: "heroicons:fire",
          link: "/lipgloss",
          children: [
            {
              label: "Getting Started",
              icon: "heroicons:play",
              link: "/lipgloss/getting-started",
            },
          ],
        },
      ],
    },
  ],
});
