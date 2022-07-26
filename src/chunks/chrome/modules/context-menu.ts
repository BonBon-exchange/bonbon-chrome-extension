import { addToCollection } from "../services/bonbon-browser";

export {};

const contextMenuItem = {
	id: "bonbon-browser.add-to-collection",
	title: "Add to BonBon collection 👆",
	contexts: [
		"page" as chrome.contextMenus.ContextType,
	]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((clickData) => {
	switch(clickData.menuItemId) {
		default:
			break;

		case "bonbon-browser.add-to-collection":
			addToCollection(clickData);
			break;
	}
});
