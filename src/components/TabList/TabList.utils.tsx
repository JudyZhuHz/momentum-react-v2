import React, {
  HTMLAttributes,
  createContext,
  FC,
  useContext,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { AllowedTagNames, TabPanelProps, TabsContextValue, TabsProps } from './TabList.types';
import { v4 as uuidv4 } from 'uuid';

export const TabsContext = createContext<TabsContextValue>(null);

export const useTabsContext: () => TabsContextValue = () => useContext(TabsContext);

/**
 * The Tabs Component
 */
export const Tabs: FC<TabsProps> = (props: TabsProps) => {
  const { selectedTab, id: _id, children } = props;

  const id = useRef(_id || uuidv4());

  const getTabId = useCallback((key: React.Key) => `${id.current}${key}`, []);
  const getPanelId = useCallback((key: React.Key) => `${getTabId(key)}-TabPanel`, [getTabId]);

  const contextProps = useMemo<TabsContextValue>(
    () => ({
      selectedTab,
      id: id.current,
      getTabId,
      activeTabId: getTabId(selectedTab),
      activePanelId: getPanelId(selectedTab),
    }),
    [getPanelId, getTabId, selectedTab]
  );

  return <TabsContext.Provider value={contextProps}>{children}</TabsContext.Provider>;
};

/**
 * The TabPanel Component
 */
export const TabPanel: FC<TabPanelProps> = <T extends AllowedTagNames>(props: TabPanelProps<T>) => {
  const { as, ...componentProps } = props;

  const tabsContext = useTabsContext();

  if (tabsContext === null) {
    // eslint-disable-next-line no-console
    console.error(
      'MRV2 (TabPanel): Not recommended to use this component outside of a TabsContext'
    );
  }

  const ariaProps = {
    'aria-labelledby': tabsContext?.activeTabId || props['aria-labelledby'],
    id: tabsContext?.activePanelId || props.id,
  } as HTMLAttributes<HTMLElement>;

  const Tag = as || 'div';

  return (
    <Tag {...(componentProps as HTMLAttributes<HTMLElement>)} role="tabpanel" {...ariaProps} />
  );
};
