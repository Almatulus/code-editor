<template>
  <div class="flex sm:hidden">
    <nav
      id="nav"
      class="border-grey-200 peer absolute inset-x-0 top-full hidden border-b bg-white target:block dark:border-0 dark:bg-gray-900"
    >
      <ul class="flex flex-col gap-y-2 px-3 pb-3">
        <li>
          <AppHeaderMobileNavLink to="/playlists"
            >Library</AppHeaderMobileNavLink
          >
        </li>
        <li>
          <AppHeaderMobileNavLink to="/login">Log In</AppHeaderMobileNavLink>
        </li>
        <li>
          <AppButton to="/login" class="inline-block w-full text-center" lg
            >Sign Up</AppButton
          >
        </li>
      </ul>
    </nav>
    <AppHeaderMobileNavButton
      href="#nav"
      icon-name="bars"
      class="peer-target:hidden peer-target:[&+a]:block"
    />
    <AppHeaderMobileNavButton href="#" icon-name="xMark" class="hidden" />
  </div>
</template>
