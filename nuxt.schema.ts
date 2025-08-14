import { field, group } from "@nuxthq/studio/theme";

export default defineNuxtSchema({
  appConfig: {
    site: group({
      title: "Parent title",
      description: "Parent description.",
      fields: {
        title: field({
          type: "string",
          title: "Title",
          description: "The title of the site",
          default: "DailyHub",
        }),
        description: field({
          type: "string",
          title: "Description",
          description: "The description of the site",
          default:
            "DailyHub is your creative sanctuary, curating a daily dose of inspiration for designers, artists, and innovators.",
        }),
        image: field({
          type: "string",
          title: "Image",
          description: "The image of the site",
          default: "/og-image.jpeg",
        }),
        url: field({
          type: "string",
          title: "URL",
          description: "The URL of the site",
          default: "https://dailyhub-nuxt.stylokit.dev",
        }),
      },
    }),
    logo: group({
      title: "Logo",
      description: "The logo of the site",
      fields: {
        show: field({
          type: "boolean",
          title: "Show",
          default: true,
        }),
        onlySymbol: field({
          type: "boolean",
          title: "Only Symbol",
          default: false,
        }),
        link: field({
          type: "string",
          title: "Link",
          default: "/",
        }),
      },
    }),
    search: group({
      title: "Search",
      description: "The search of the site",
      fields: {
        show: field({
          type: "boolean",
          title: "Show",
          default: true,
        }),
      },
    }),
    submitDialog: group({
      title: "Submit Dialog",
      description: "The submit dialog of the site",
      fields: {
        show: field({
          type: "boolean",
          title: "Show",
          default: true,
        }),
        triggerText: field({
          type: "string",
          title: "Trigger Text",
          default: "Submit",
        }),
        triggerIcon: field({
          type: "string",
          title: "Trigger Icon",
          default: "heroicons:cursor-arrow-rays",
        }),
        triggerVariant: field({
          type: "string",
          title: "Trigger Variant",
          default: "secondary",
        }),
        dialogTitle: field({
          type: "string",
          title: "Dialog Title",
          default: "Submit Your Website",
        }),
        dialogDescription: field({
          type: "string",
          title: "Dialog Description",
          default:
            "Found a site you fancy? If it clicks with us too, watch for it in our catalog!",
        }),
        form: field({
          type: "object",
          title: "Form",
        }),
      },
    }),
    buyButton: group({
      title: "Buy Button",
      description: "The buy button of the site",
      fields: {
        show: field({
          type: "boolean",
          title: "Show",
          default: true,
        }),
        buttonText: field({
          type: "string",
          title: "Button Text",
          default: "Buy Template",
        }),
        buttonVariant: field({
          type: "string",
          title: "Button Variant",
          default: "primary",
        }),
        link: field({
          type: "string",
          title: "Link",
          default:
            "https://stylokit.lemonsqueezy.com/buy/5eed5001-9087-405b-a414-d654b9597e5d",
        }),
      },
    }),
  },
});
