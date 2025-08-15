<script setup lang="ts">
  const config = useAppConfig();
  const searchDialogOpen = useState<boolean>("searchDialogOpen", () => false);
</script>

<template>
  <aside
    class="flex flex-col justify-between h-full p-4 pt-6 overflow-x-hidden overflow-y-auto lg:w-52 xl:w-72 flex-shrink-0"
  >
    <SidebarBody>
      <!-- Logo section - Shows brand logo if enabled in config -->
      <NuxtLink
        v-if="config.logo.show"
        :to="config.logo.link"
        class="pl-3"
        aria-label="Home"
        aria-current="page"
      >
        <LogoBrand :only-symbol="config.logo.onlySymbol" />
      </NuxtLink>

      <SidebarContent>
        <!-- Search section - Shows search input if enabled in config -->
        <SearchInput
          v-if="config.search.show"
          :pointer="true"
          @click="searchDialogOpen = true"
          :placeholder="config.search.placeholder"
          :readonly="true"
        />

        <!-- Primary navigation menu -->
        <template v-for="menu in config.menus">
          <div :class="[menu.subheader ? 'flex flex-col gap-4' : '']">
            <Divider v-if="menu.subheader" :label="menu.subheader" />
            <SidebarMenu>
              <MenuItem
                v-for="item in menu.items"
                :to="item.link"
                :icon="item.icon"
                :children="item.children"
                >{{ item.label }}</MenuItem
              >
            </SidebarMenu>
          </div>
        </template>
      </SidebarContent>
    </SidebarBody>

    <!-- Footer section - Shows copyright info if enabled in config -->
    <SidebarFooter />
  </aside>
</template>
