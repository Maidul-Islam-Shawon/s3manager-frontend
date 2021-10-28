const listToTreeConverter = function listToTree(menus) {
    let parentMenus;
    parentMenus = menus.filter((x) => x.ParentId === 0);
    for (let i = 0; i < parentMenus.length; i++) {
      let childMenus;
      
      childMenus = menus.filter(
        (x) => x.ParentId === parentMenus[i].id
      );
      parentMenus[i].childMenus = childMenus;
    
      for (let j = 0; j<childMenus.length;j++){
       let subChildMenus = menus.filter(
            (x) => x.ParentId === childMenus[j].id
          );
          if(subChildMenus.length >=1){
            parentMenus[i].childMenus[j].subChildMenus = subChildMenus;
          }
          
      }
     
    }
    return parentMenus;
  }
export default listToTreeConverter;
  //const data  = list_to_tree(sidebarData);
  
  