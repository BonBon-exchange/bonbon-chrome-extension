export {};

const contextMenuItem = {
	id: "",
	title: "👆 Add to BonBon collection",
	contexts: [
		"page" as chrome.contextMenus.ContextType,
	]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((clickData) => {
	if (clickData.menuItemId == "add-to-collection") {
		alert("clicked point in page 👏👏");
	}
});
