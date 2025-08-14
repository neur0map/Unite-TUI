<template>
  <PricingSection
    title="Sponsorship"
    description="DailyHub empowers designers with the latest tools and resources,
          optimizing workflows for thousands each month."
    :yearly-discount="45"
    v-slot="{ yearlyToggled }"
  >
    <PricingCard
      variant="pro"
      title="Pro tier"
      desc="Premium access"
      :price="yearlyToggled ? '$102' : '$19'"
      :interval="yearlyToggled ? '/yearly' : '/month'"
      :features="[
        'Priority Support',
        'Exclusive Content',
        'Early Access',
        'VIP Events',
        'Pro Features',
      ]"
      :buttonText="yearlyToggled ? 'Choose Yearly' : 'Choose Month'"
    />
    <PricingCard
      variant="elite"
      title="Elite tier"
      desc="Premium access"
      :price="yearlyToggled ? '$156' : '$29'"
      :interval="yearlyToggled ? '/yearly' : '/month'"
      :features="[
        'Priority Support',
        'Exclusive Content',
        'Early Access',
        'VIP Events',
        'Pro Features',
      ]"
      :buttonText="yearlyToggled ? 'Choose Yearly' : 'Choose Month'"
    />
    <PricingCard
      variant="diamond"
      title="Diamond tier"
      desc="Premium access"
      :price="yearlyToggled ? '$534' : '$99'"
      :interval="yearlyToggled ? '/yearly' : '/month'"
      :features="[
        'Priority Support',
        'Exclusive Content',
        'Early Access',
        'VIP Events',
        'Pro Features',
      ]"
      :buttonText="yearlyToggled ? 'Choose Yearly' : 'Choose Month'"
    />
  </PricingSection>
</template>
