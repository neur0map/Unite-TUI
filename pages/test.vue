<template>
  <main class="container mx-auto space-y-10">
    <!-- Badge section - Shows different badge variants and sizes -->
    <TestSection title="Badge">
      <Badge variant="brand" size="sm">Brand sm</Badge>
      <Badge variant="brand" size="xs">Brand xs</Badge>
      <Badge variant="gray" size="sm">Gray sm</Badge>
      <Badge variant="gray" size="xs">Gray xs</Badge>
      <Badge variant="square">Square</Badge>
    </TestSection>

    <!-- Badge Icon section - Shows badge icons in different variants and sizes -->
    <TestSection title="Badge Icon">
      <div class="flex flex-row items-start gap-4">
        <BadgeIcon variant="brand" size="md">
          <SvgLogo variant="brand" />
        </BadgeIcon>
        <BadgeIcon variant="brand" size="lg">
          <SvgLogo variant="brand" />
        </BadgeIcon>
      </div>
      <div class="flex flex-row items-start gap-4">
        <BadgeIcon variant="gray" size="md">
          <SvgLogo variant="gray" />
        </BadgeIcon>
        <BadgeIcon variant="gray" size="lg">
          <SvgLogo variant="gray" />
        </BadgeIcon>
      </div>
      <div class="flex flex-row items-start gap-4">
        <BadgeIcon variant="diamond" size="md">
          <SvgLogo variant="diamond" />
        </BadgeIcon>
        <BadgeIcon variant="diamond" size="lg">
          <SvgLogo variant="diamond" />
        </BadgeIcon>
      </div>
    </TestSection>

    <!-- Button section - Shows different button variants, sizes and states with icons -->
    <TestSection title="Button">
      <div class="flex flex-row items-start gap-4">
        <Button variant="primary" size="sm">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
        <Button variant="primary" size="md">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
        <Button variant="primary" size="lg">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
      </div>
      <div class="flex flex-row items-start gap-4">
        <Button variant="secondary" size="sm">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
        <Button variant="secondary" size="md">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
        <Button variant="secondary" size="lg">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
      </div>
      <div class="flex flex-row items-start gap-4">
        <Button variant="ghost" size="sm">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
        <Button variant="ghost" size="md">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
        <Button variant="ghost" size="lg">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
      </div>
      <div class="flex flex-row items-start gap-4">
        <Button variant="inverse" size="sm">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
        <Button variant="inverse" size="md">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
        <Button variant="inverse" size="lg">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
      </div>
      <div class="flex flex-row items-start gap-4">
        <Button variant="link" size="sm">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
        <Button variant="link" size="md">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
        <Button variant="link" size="lg">
          <Icon name="heroicons:bell-alert-solid" size="16px" />
          <span>Button</span>
          <Icon name="heroicons:bell-alert-solid" size="16px" />
        </Button>
      </div>
    </TestSection>

    <!-- Icon Button section - Shows buttons with only icons -->
    <TestSection title="Icon Button">
      <IconButton variant="primary">
        <Icon name="heroicons:bell-alert-solid" size="16px" />
      </IconButton>
      <IconButton variant="secondary">
        <Icon name="heroicons:bell-alert-solid" size="16px" />
      </IconButton>
    </TestSection>

    <!-- Logo Brand section - Shows logo in full and symbol-only variants -->
    <TestSection title="Logo Brand">
      <LogoBrand />
      <LogoBrand :symbol="true" />
    </TestSection>

    <!-- Menu Button section - Shows menu button in default and open states -->
    <TestSection title="Menu Button">
      <MenuButton />
      <MenuButton :open="true" />
    </TestSection>

    <!-- Section Heading - Shows heading with action button -->
    <TestSection title="Section Heading">
      <SectionHeading buttonText="Explore all">New Releases</SectionHeading>
    </TestSection>

    <!-- Menu Item section - Shows menu items with icons and different routes -->
    <TestSection title="Menu Item">
      <div class="w-full grid grid-cols-4 gap-4">
        <MenuItem to="#" icon="heroicons:clock-solid">Discover</MenuItem>
        <MenuItem to="/test" icon="heroicons:clock-solid">Discover</MenuItem>
      </div>
    </TestSection>

    <!-- Text Input section - Shows basic text input -->
    <TestSection title="Text Input">
      <TextInput />
    </TestSection>

    <!-- Search Input section - Shows search input field -->
    <TestSection title="Search Input">
      <SearchInput />
    </TestSection>

    <!-- Search Result section - Shows search results list with items -->
    <TestSection title="Search Result">
      <SearchResult>
        <SearchResultItem
          title="Nexus AI"
          desc="/templates/nexus-ai"
          to="/templates"
        />
        <SearchResultItem
          title="Nexus AI"
          desc="/templates/nexus-ai"
          to="/templates"
        />
        <SearchResultItem
          title="Nexus AI"
          desc="/templates/nexus-ai"
          to="/templates"
        />
        <SearchResultItem
          title="Nexus AI"
          desc="/templates/nexus-ai"
          to="/templates"
        />
        <SearchResultItem
          title="Nexus AI"
          desc="/templates/nexus-ai"
          to="/templates"
        />
        <SearchResultItem
          title="Nexus AI"
          desc="/templates/nexus-ai"
          to="/templates"
        />
        <SearchResultItem
          title="Nexus AI"
          desc="/templates/nexus-ai"
          to="/templates"
        />
      </SearchResult>
    </TestSection>

    <!-- Submit Button section - Shows submit button in normal and loading states -->
    <TestSection title="Submit Button">
      <SubmitButton>Submit</SubmitButton>
      <SubmitButton :loading="true">Submit</SubmitButton>
    </TestSection>

    <!-- Submit Form section - Shows form in different states -->
    <TestSection title="Submit Form">
      <div class="w-full grid grid-cols-3 gap-4">
        <SubmitForm />
        <SubmitForm :loading="true" />
        <SubmitForm :success="true" />
      </div>
    </TestSection>

    <!-- Pricing Card section - Shows different pricing tiers -->
    <TestSection title="Pricing Card">
      <div class="w-full grid grid-cols-3 gap-10">
        <PricingCard
          variant="pro"
          title="Pro tier"
          desc="Premium access"
          price="$19"
          :features="[
            'Priority Support',
            'Exclusive Content',
            'Early Access',
            'VIP Events',
            'Pro Features',
          ]"
        />
        <PricingCard
          variant="elite"
          title="Elite tier"
          desc="Premium access"
          price="$19"
          :features="[
            'Priority Support',
            'Exclusive Content',
            'Early Access',
            'VIP Events',
            'Pro Features',
          ]"
        />
        <PricingCard
          variant="diamond"
          title="Diamond tier"
          desc="Premium access"
          price="$19"
          :features="[
            'Priority Support',
            'Exclusive Content',
            'Early Access',
            'VIP Events',
            'Pro Features',
          ]"
        />
      </div>
    </TestSection>

    <!-- Default Card section - Shows different card variations -->
    <TestSection title="Default Card">
      <div class="w-full flex flex-row flex-wrap items-start gap-10">
        <Card
          title="Title"
          to="https://google.com"
          image="/img/highlight-gilroy.webp"
        >
        </Card>

        <Card
          title="Title"
          to="https://google.com"
          image="/img/highlight-gilroy.webp"
          badge="NEW"
        >
        </Card>

        <Card
          title="Title"
          to="https://google.com"
          image="/img/highlight-gilroy.webp"
          desc="Category"
          badge="NEW"
        >
        </Card>

        <Card
          title="Title"
          subtitle="$69"
          to="https://google.com"
          image="/img/highlight-gilroy.webp"
          desc="Category"
          badge="NEW"
        >
        </Card>
      </div>
    </TestSection>

    <!-- Featured Card section - Shows featured content card -->
    <TestSection title="Featured Card">
      <div class="w-full flex flex-row flex-wrap items-start gap-10">
        <FeaturedCard
          title="Framer"
          desc="The internet is your canvas."
          to="https://google.com"
          image="/img/highlight-gilroy.webp"
        >
        </FeaturedCard>
      </div>
    </TestSection>

    <!-- Pricing Tab section - Shows pricing period selection tabs -->
    <TestSection title="Pricing Tab">
      <PricingTabGroup>
        <PricingTab>Monthly</PricingTab>
        <PricingTab
          >Yearly
          <span class="body-2 text-brand-5">(Save 45%)</span></PricingTab
        >
      </PricingTabGroup>
    </TestSection>

    <!-- Sidebar section - Shows complete sidebar with navigation -->
    <TestSection title="Sidebar">
      <div class="grid grid-cols-3">
        <Sidebar>
          <SidebarBody>
            <NuxtLink to="/" aria-label="Home" aria-current="page">
              <LogoBrand />
            </NuxtLink>

            <SidebarContent>
              <SearchInput />

              <SidebarMenu>
                <MenuItem icon="heroicons:clock-solid">Discover</MenuItem>
                <MenuItem icon="heroicons:information-circle-solid"
                  >Info</MenuItem
                >
                <MenuItem icon="heroicons:banknotes-solid">A Sponsor</MenuItem>
              </SidebarMenu>

              <div class="flex flex-col gap-4">
                <Divider label="SOURCE" />
                <SidebarMenu>
                  <MenuItem icon="heroicons:fire-solid">Inspirations</MenuItem>
                  <MenuItem icon="heroicons:document-duplicate-solid"
                    >Templates</MenuItem
                  >
                  <MenuItem icon="heroicons:ellipsis-horizontal-solid"
                    >Design Systems</MenuItem
                  >
                  <MenuItem icon="heroicons:newspaper-solid"
                    >Premium UI Kits</MenuItem
                  >
                  <MenuItem icon="heroicons:queue-list-solid">Icons</MenuItem>
                  <MenuItem icon="heroicons:language-solid"
                    >Typography</MenuItem
                  >
                  <MenuItem icon="heroicons:rocket-launch-solid"
                    >Design Tools</MenuItem
                  >
                </SidebarMenu>
              </div>
            </SidebarContent>
          </SidebarBody>
          <SidebarFooter
            >© 2024 MADE BY
            <a
              href="https://stylokit.dev"
              target="_blank"
              class="text-primary/50 ml-1"
              >STYLOKIT</a
            ></SidebarFooter
          >
        </Sidebar>
      </div>
    </TestSection>

    <!-- Pricing Switch section - Shows pricing toggle with different label options -->
    <TestSection title="Pricing Switch">
      <PricingSwitch />
      <PricingSwitch label="Monthly" labelEnabled="Yearly" />
      <PricingSwitch
        label="Monthly"
        labelEnabled="Yearly"
        badgeLabel="(Save 45%)"
      />
    </TestSection>

    <!-- Empty test section for future components -->
    <TestSection title="Test"> </TestSection>
  </main>
</template>

<script setup lang="ts"></script>
