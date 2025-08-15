<template>
  <PricingSection
    title="Support the TUI Ecosystem"
    description="Help build the future of terminal user interfaces. Your support enables continued development of high-quality TUI tools and components for the Go community."
    :hide-toggle="true"
  >
    <PricingCard
      variant="pro"
      title="Unite UI"
      desc="Support Unite UI development"
      price="$5+"
      interval="/month"
      :features="[
        'Support open source development',
        'Help maintain high-quality components',
        'Enable new feature development',
        'Contribute to community growth',
        'Make TUI development accessible',
      ]"
      buttonText="Support Unite UI"
      buttonLink="https://github.com/sponsors/unite-ui"
    />
    <PricingCard
      variant="elite"
      title="Charmbracelet"
      desc="Support TUI framework creators"
      price="$5+"
      interval="/month"
      :features="[
        'Support BubbleTea framework',
        'Enable Lipgloss development',
        'Fund TUI innovation',
        'Help core team focus full-time',
        'Drive terminal UI evolution',
      ]"
      buttonText="Support Charmbracelet"
      buttonLink="https://github.com/sponsors/charmbracelet"
    />
  </PricingSection>
</template>
