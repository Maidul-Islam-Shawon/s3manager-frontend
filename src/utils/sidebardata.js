export let sidebardata = [
  {
    id: 1,
    name: "Sanction",
    url: "/Sanction",
    icon: "icon ion-hammer",
    ParentId: 0,
  },
  {
    id: 2,
    name: "Add to Sanction",
    url: "/AddIndividualSanction",
    icon: "icon ion-android-add-circle",
    ParentId: 1,
  },
  {
    id: 3,
    name: "Add Individual Sanction",
    url: "/AddIndividualSanction",
    icon: "icon ion-android-person",
    ParentId: 2,
  },
  {
    id: 4,
    name: "Add Corporate Sanction",
    url: "/AddCorporateSanction",
    icon: "icon ion-android-list",
    ParentId: 2,
  },
  {
    id: 5,
    name: "View Sanction List",
    url: "/SanctionList",
    icon: "icon ion-android-clipboard",
    ParentId: 1,
  },
  {
    id: 6,
    name: "Bulk Sanction Upload",
    url: "/bulk-sanction",
    icon: "icon ion-android-clipboard",
    ParentId: 1,
  },
];
