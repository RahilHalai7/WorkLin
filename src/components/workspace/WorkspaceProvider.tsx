import React, { useEffect } from 'react';
import { subscribeToAuth, getCurrentUser } from '../../lib/firebase/auth';
import { useWorkspaceStore } from '../../store/workspaceStore';
import { subscribeToWorkspace, getWorkspace } from '../../lib/firebase/database';
import { getPagesByWorkspace, subscribeToPage } from '../../lib/firebase/database';
import { subscribeToBlocks } from '../../lib/firebase/database';

interface WorkspaceProviderProps {
  children: React.ReactNode;
}

export const WorkspaceProvider: React.FC<WorkspaceProviderProps> = ({ children }) => {
  const { user, setUser, setCurrentWorkspace, setPages, setCurrentPageId, setBlocks } = useWorkspaceStore();

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = subscribeToAuth((user) => {
      setUser(user);
      
      if (user) {
        // TODO: Load user's default workspace or create one
        // This is incomplete for contributors to implement
        // See issue #X for details
      } else {
        setCurrentWorkspace(null);
        setPages([]);
        setCurrentPageId(null);
        setBlocks([]);
      }
    });

    return () => unsubscribe();
  }, [setUser, setCurrentWorkspace, setPages, setCurrentPageId, setBlocks]);

  return <>{children}</>;
};
