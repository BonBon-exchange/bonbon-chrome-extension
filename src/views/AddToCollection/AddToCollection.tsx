import { useEffect, useState } from "react";

export const AddToCollection: React.FC = () => {
  const [tab, setTab] = useState<chrome.tabs.Tab>();

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        setTab(tabs[0]);
      });
  }, []);

  return (
    <>
      <div id="AddToCollection__infos">
        <div className="AddToCollection__infos-item">{tab?.title}</div>
        <div className="AddToCollection__infos-item">{tab?.url}</div>
      </div>
    </>
  );
};
