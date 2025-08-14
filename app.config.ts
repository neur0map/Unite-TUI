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
    show: false,
    triggerText: "Submit",
    triggerIcon: "heroicons:cursor-arrow-rays",
    triggerVariant: "secondary",
    dialogTitle: "Submit Your Website",
    dialogDescription:
      "Found a site you fancy? If it clicks with us too, watch for it in our catalog!",
    form: {
      inputPlaceholder: "URL",
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
        label: "Home",
        link: "/",
      },
      {
        label: "Library",
        link: "/library",
      },
      {
        label: "Documentation",
        link: "/docs",
      },
      {
        label: "Examples",
        link: "/examples",
      },
      {
        label: "GitHub",
        link: "https://github.com/unite-ui/unite-ui",
        external: true,
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
          label: "A Sponsor",
          icon: "heroicons:banknotes",
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
          label: "Inspirations",
          icon: "heroicons:fire",
          link: "/inspirations",
        },
        {
          label: "Templates",
          icon: "heroicons:document-duplicate",
          link: "/templates",
        },
        {
          label: "Design Systems",
          icon: "heroicons:ellipsis-horizontal",
          link: "/systems",
        },
        {
          label: "Premium UI Kits",
          icon: "heroicons:newspaper",
          link: "/premium",
        },
        {
          label: "Icons",
          icon: "heroicons:queue-list",
          link: "/icons",
        },
        {
          label: "Typography",
          icon: "heroicons:language",
          link: "/typography",
        },
        {
          label: "Design Tools",
          icon: "heroicons:rocket-launch",
          link: "/tools",
        },
      ],
    },
  ],
});
