<script setup lang="ts">
  const props = defineProps({
    variant: {
      required: false,
      type: String,
      default: "pro", // pro, elite, diamond
    },
    title: {
      required: true,
      type: String,
    },
    desc: {
      required: false,
      type: String,
    },
    price: {
      required: true,
      type: String,
    },
    interval: {
      required: false,
      type: String,
      default: "/month",
    },
    features: {
      required: false,
      type: Array,
      default: [],
    },
    buttonText: {
      required: false,
      type: String,
      default: "Choose month",
    },
  });

  const buttonVariant =
    props.variant == "diamond"
      ? "inverse"
      : props.variant == "elite"
      ? "primary"
      : "secondary";
  const badgeVariant =
    props.variant == "diamond"
      ? "diamond"
      : props.variant == "elite"
      ? "brand"
      : "gray";
  const cardClass = ref({
    "bg-hover-none border border-alpha-5": props.variant == "pro",
    "bg-hover border border-alpha-5": props.variant == "elite",
    "bg-brand-4 border border-alpha-5": props.variant == "diamond",
  });
</script>

<template>
  <div class="flex flex-col gap-8 p-6 rounded-lg" :class="cardClass">
    <div class="flex flex-col gap-6">
      <div class="flex flex-row items-center gap-3">
        <BadgeIcon :variant="badgeVariant" size="lg">
          <SvgLogo :variant="badgeVariant" />
        </BadgeIcon>

        <div class="grow">
          <h5
            class="heading-5 truncate"
            :class="[variant == 'diamond' ? 'text-inverse' : 'text-primary']"
          >
            {{ title }}
          </h5>
          <p
            v-if="desc"
            class="body-2 truncate"
            :class="[variant == 'diamond' ? 'text-inverse' : 'text-tertiary']"
          >
            {{ desc }}
          </p>
        </div>
      </div>
      <div class="flex flex-row items-end gap-1.5">
        <span
          class="heading-2"
          :class="[variant == 'diamond' ? 'text-inverse' : 'text-primary']"
          >{{ price }}</span
        >
        <span
          class="heading-4"
          :class="[variant == 'diamond' ? 'text-inverse' : 'text-tertiary']"
          >{{ interval }}</span
        >
      </div>
      <div class="flex flex-col gap-2">
        <div
          class="flex flex-row items-center gap-2"
          v-for="feature in features"
        >
          <Icon
            name="heroicons:check-solid"
            size="16px"
            :class="[variant == 'diamond' ? 'text-inverse' : 'text-tertiary']"
          />
          <p
            class="body-2"
            :class="[variant == 'diamond' ? 'text-inverse' : 'text-tertiary']"
          >
            {{ feature }}
          </p>
        </div>
      </div>
    </div>

    <Button
      :variant="buttonVariant"
      size="lg"
      @click="$emit('select', variant)"
    >
      {{ buttonText }}
    </Button>
  </div>
</template>
