# WorkLin - GitHub Issues for Open Source Contributors

This document contains 30 issues ranging from easy to hard difficulty levels. These are designed for open source contributors participating in ACWOC (All Contributors Welcome Open Challenge).

## 🟢 Easy Issues (Beginner Friendly)

### Issue #1: Add Loading Spinner Component
**Difficulty:** Easy  
**Labels:** `good first issue`, `ui`, `component`  
**Description:**  
Create a reusable loading spinner component using ShadCN UI and Framer Motion. The spinner should be customizable (size, color) and show smooth animations.

**Acceptance Criteria:**
- Component accepts `size` prop (sm, md, lg)
- Component accepts `color` prop
- Uses Framer Motion for smooth animations
- Follows ShadCN design patterns
- Add to `src/components/ui/spinner.tsx`

**Files to Create/Modify:**
- `src/components/ui/spinner.tsx`

---

### Issue #2: Implement Dark Mode Toggle
**Difficulty:** Easy  
**Labels:** `good first issue`, `ui`, `theme`  
**Description:**  
Add a dark mode toggle button in the header/sidebar that switches between light and dark themes. Use Tailwind's dark mode classes.

**Acceptance Criteria:**
- Toggle button in sidebar/header
- Persists preference to localStorage
- Smooth theme transition
- Updates all components correctly

**Files to Create/Modify:**
- `src/components/ui/theme-toggle.tsx`
- `src/hooks/use-theme.ts`
- `src/App.tsx` (add toggle)

---

### Issue #3: Add Page Icon Picker
**Difficulty:** Easy  
**Labels:** `good first issue`, `feature`, `ui`  
**Description:**  
Create a dialog/modal that allows users to pick an emoji or icon for their pages. Include a search functionality for emojis.

**Acceptance Criteria:**
- Click on page icon opens picker
- Search/filter emojis
- Recent emojis section
- Updates page icon in database
- Uses ShadCN Dialog component

**Files to Create/Modify:**
- `src/components/ui/icon-picker.tsx`
- `src/components/Sidebar.tsx` (integrate picker)

---

### Issue #4: Implement Keyboard Shortcuts Help Modal
**Difficulty:** Easy  
**Labels:** `good first issue`, `documentation`, `ux`  
**Description:**  
Create a keyboard shortcuts help modal that shows all available shortcuts (Cmd+K for command palette, Cmd+B for bold, etc.). Should be accessible via Cmd+? or Ctrl+?.

**Acceptance Criteria:**
- Modal opens with Cmd+? / Ctrl+?
- Lists all keyboard shortcuts
- Organized by category
- Styled with ShadCN components
- Accessible (keyboard navigation)

**Files to Create/Modify:**
- `src/components/ui/shortcuts-modal.tsx`
- `src/hooks/use-keyboard-shortcuts.ts`
- `src/App.tsx` (add keyboard listener)

---

### Issue #5: Add Toast Notifications for Actions
**Difficulty:** Easy  
**Labels:** `good first issue`, `ui`, `feedback`  
**Description:**  
Implement toast notifications for user actions (page created, block deleted, etc.). Use the existing toast component and add it throughout the app.

**Acceptance Criteria:**
- Toast appears on page create/delete
- Toast appears on block create/delete/update
- Toast appears on workspace actions
- Auto-dismiss after 3 seconds
- Success/error variants

**Files to Create/Modify:**
- Update existing components to use `useToast` hook
- `src/components/PageEditor.tsx`
- `src/components/Sidebar.tsx`

---

### Issue #6: Create Empty State Components
**Difficulty:** Easy  
**Labels:** `good first issue`, `ui`, `ux`  
**Description:**  
Design and implement empty state components for when there are no pages, no blocks, or no search results. Make them visually appealing with illustrations.

**Acceptance Criteria:**
- Empty state for no pages
- Empty state for no blocks
- Empty state for no search results
- Includes helpful call-to-action
- Uses Framer Motion for subtle animations

**Files to Create/Modify:**
- `src/components/ui/empty-state.tsx`
- Update `PageEditor.tsx` and `Sidebar.tsx`

---

### Issue #7: Add Page Cover Image Upload
**Difficulty:** Easy  
**Labels:** `good first issue`, `feature`, `storage`  
**Description:**  
Allow users to upload and set cover images for pages. Images should be stored in Firebase Storage and displayed at the top of pages.

**Acceptance Criteria:**
- Upload button in page header
- Image preview before upload
- Progress indicator during upload
- Delete cover image option
- Responsive image display
- Error handling for failed uploads

**Files to Create/Modify:**
- `src/components/page/PageCover.tsx`
- `src/components/PageEditor.tsx` (add cover section)
- Use `uploadImage` from `src/lib/firebase/storage.ts`

---

### Issue #8: Implement Page Search Functionality
**Difficulty:** Easy  
**Labels:** `good first issue`, `feature`, `search`  
**Description:**  
Add a search bar in the sidebar that allows users to search through all pages by title. Results should be highlighted and clickable.

**Acceptance Criteria:**
- Search input in sidebar
- Real-time search as user types
- Highlights matching text
- Click result to navigate to page
- Shows "No results" message
- Keyboard shortcut (Cmd+K / Ctrl+K)

**Files to Create/Modify:**
- `src/components/Sidebar.tsx` (add search)
- `src/hooks/use-page-search.ts`

---

### Issue #9: Add Block Drag and Drop Reordering
**Difficulty:** Easy-Medium  
**Labels:** `good first issue`, `feature`, `interaction`  
**Description:**  
Implement drag and drop functionality to reorder blocks within a page. Use HTML5 drag and drop API or a library like @dnd-kit.

**Acceptance Criteria:**
- Blocks can be dragged
- Visual feedback during drag
- Drop zones between blocks
- Updates block order in database
- Smooth animations
- Works on touch devices

**Files to Create/Modify:**
- `src/components/Block.tsx` (add drag handlers)
- `src/components/PageEditor.tsx` (add drop zones)
- Update block order in Firestore

---

### Issue #10: Create Command Palette (Cmd+K)
**Difficulty:** Easy-Medium  
**Labels:** `good first issue`, `feature`, `ux`  
**Description:**  
Implement a command palette that opens with Cmd+K / Ctrl+K. Users can search and execute commands like "New Page", "Search", "Toggle Theme", etc.

**Acceptance Criteria:**
- Opens with Cmd+K / Ctrl+K
- Searchable command list
- Keyboard navigation (arrow keys, enter)
- Groups commands by category
- Executes actions (create page, navigate, etc.)
- Uses ShadCN Dialog/Popover

**Files to Create/Modify:**
- `src/components/ui/command-palette.tsx`
- `src/hooks/use-command-palette.ts`
- `src/App.tsx` (add keyboard listener)

---

## 🟡 Medium Issues (Intermediate)

### Issue #11: Implement Real-time Collaboration Presence
**Difficulty:** Medium  
**Labels:** `collaboration`, `feature`, `realtime`  
**Description:**  
Show which users are currently viewing/editing a page. Display their avatars, names, and cursors. Use Firebase Realtime Database or Firestore for presence.

**Acceptance Criteria:**
- Shows active users on page
- User avatars in header
- Updates in real-time
- Cleans up when user leaves
- Handles disconnections gracefully

**Files to Create/Modify:**
- `src/components/collaboration/PresenceIndicator.tsx`
- `src/lib/firebase/presence.ts`
- `src/components/PageEditor.tsx` (add presence)

---

### Issue #12: Add Comments System to Blocks
**Difficulty:** Medium  
**Labels:** `feature`, `collaboration`, `comments`  
**Description:**  
Allow users to add comments to specific blocks. Comments should be threaded, have timestamps, and support @mentions. Store in Firestore.

**Acceptance Criteria:**
- Click block to add comment
- Comment thread UI
- Timestamps and author info
- @mention support (future)
- Resolve/delete comments
- Real-time updates

**Files to Create/Modify:**
- `src/components/comments/CommentThread.tsx`
- `src/components/comments/CommentBubble.tsx`
- `src/lib/firebase/comments.ts`
- `src/components/Block.tsx` (add comment button)

---

### Issue #13: Implement Page Templates System
**Difficulty:** Medium  
**Labels:** `feature`, `templates`, `content`  
**Description:**  
Create a system for page templates (Meeting Notes, Project Plan, etc.). Users can create pages from templates with pre-filled content.

**Acceptance Criteria:**
- Template gallery/picker
- Preview templates
- Create page from template
- Custom templates (save current page as template)
- Template categories

**Files to Create/Modify:**
- `src/components/templates/TemplateGallery.tsx`
- `src/components/templates/TemplateCard.tsx`
- `src/lib/templates.ts`
- `src/types/template.ts`

---

### Issue #14: Add Database Views (Table, Board, Calendar)
**Difficulty:** Medium  
**Labels:** `feature`, `views`, `database`  
**Description:**  
Implement database views similar to Notion. Allow pages to be viewed as tables, boards (Kanban), or calendar. Store view settings in Firestore.

**Acceptance Criteria:**
- Table view with columns
- Board view (Kanban) with columns
- Calendar view with dates
- Switch between views
- Persist view preferences
- Filter and sort functionality

**Files to Create/Modify:**
- `src/components/views/TableView.tsx`
- `src/components/views/BoardView.tsx`
- `src/components/views/CalendarView.tsx`
- `src/types/view.ts`
- `src/components/PageEditor.tsx` (add view switcher)

---

### Issue #15: Implement Block Mentions (@) and Links
**Difficulty:** Medium  
**Labels:** `feature`, `editor`, `links`  
**Description:**  
Add @mention support to link to other pages/users, and [[page links]] syntax. Should show autocomplete dropdown and create bidirectional links.

**Acceptance Criteria:**
- Type @ to show mention dropdown
- Type [[ to show page link dropdown
- Autocomplete with search
- Creates link in content
- Backlinks section (pages that link to this)
- Updates in real-time

**Files to Create/Modify:**
- `src/components/editor/MentionExtension.tsx` (TipTap extension)
- `src/components/editor/LinkExtension.tsx`
- `src/components/ui/mention-popover.tsx`
- `src/lib/firebase/links.ts`

---

### Issue #16: Add Export Functionality (PDF, Markdown, HTML)
**Difficulty:** Medium  
**Labels:** `feature`, `export`, `utility`  
**Description:**  
Implement export functionality to download pages as PDF, Markdown, or HTML. Use libraries like jsPDF or html2pdf for PDF generation.

**Acceptance Criteria:**
- Export menu in page header
- Export as PDF
- Export as Markdown
- Export as HTML
- Preserves formatting
- Includes page title and metadata

**Files to Create/Modify:**
- `src/components/page/ExportMenu.tsx`
- `src/lib/export/pdf.ts`
- `src/lib/export/markdown.ts`
- `src/lib/export/html.ts`

---

### Issue #17: Implement Workspace Sharing and Permissions
**Difficulty:** Medium  
**Labels:** `feature`, `collaboration`, `permissions`  
**Description:**  
Allow workspace owners to share workspaces with other users and set permissions (view, comment, edit). Store permissions in Firestore.

**Acceptance Criteria:**
- Share workspace dialog
- Invite by email
- Permission levels (view, comment, edit, admin)
- Manage members list
- Remove members
- Permission checks before actions

**Files to Create/Modify:**
- `src/components/workspace/ShareDialog.tsx`
- `src/components/workspace/MembersList.tsx`
- `src/lib/firebase/permissions.ts`
- `src/types/permission.ts`

---

### Issue #18: Add Version History / Page History
**Difficulty:** Medium  
**Labels:** `feature`, `history`, `version-control`  
**Description:**  
Implement version history for pages. Store snapshots of page content over time and allow users to restore previous versions.

**Acceptance Criteria:**
- View page history
- Timeline of changes
- Preview previous versions
- Restore to previous version
- Show who made changes
- Efficient storage (diffs, not full copies)

**Files to Create/Modify:**
- `src/components/page/VersionHistory.tsx`
- `src/lib/firebase/history.ts`
- `src/types/history.ts`

---

### Issue #19: Implement Advanced Search with Filters
**Difficulty:** Medium  
**Labels:** `feature`, `search`, `filters`  
**Description:**  
Enhance search functionality with filters (by date, author, page type, tags). Use Firestore queries for efficient filtering.

**Acceptance Criteria:**
- Search by content, title, tags
- Filter by date range
- Filter by author
- Filter by page type
- Save search queries
- Advanced query syntax

**Files to Create/Modify:**
- `src/components/search/AdvancedSearch.tsx`
- `src/components/search/SearchFilters.tsx`
- `src/lib/firebase/search.ts`

---

### Issue #20: Add Block-level Permissions
**Difficulty:** Medium  
**Labels:** `feature`, `permissions`, `security`  
**Description:**  
Allow users to set permissions on individual blocks (public, private, specific users). Useful for sensitive information within shared pages.

**Acceptance Criteria:**
- Permission dropdown on blocks
- Public/private/restricted options
- User-specific permissions
- Visual indicator for restricted blocks
- Permission checks before rendering

**Files to Create/Modify:**
- `src/components/Block.tsx` (add permission UI)
- `src/lib/firebase/block-permissions.ts`
- `src/types/permission.ts` (extend)

---

## 🔴 Hard Issues (Advanced)

### Issue #21: Implement Real-time Collaborative Editing with Yjs
**Difficulty:** Hard  
**Labels:** `collaboration`, `realtime`, `yjs`, `advanced`  
**Description:**  
Complete the Yjs integration for real-time collaborative editing. Multiple users should be able to edit the same page simultaneously with conflict resolution.

**Acceptance Criteria:**
- Yjs document per page
- WebRTC or Firebase provider
- Operational transforms work correctly
- Cursor positions sync
- Selection highlighting
- Handles network disconnections
- Conflict resolution

**Files to Create/Modify:**
- `src/components/collaboration/CollaborationProvider.tsx` (complete implementation)
- `src/lib/collaboration/yjs-provider.ts`
- `src/lib/collaboration/cursor-sync.ts`
- `src/components/editor/TipTapEditor.tsx` (integrate Yjs)

---

### Issue #22: Implement Offline Support with Service Workers
**Difficulty:** Hard  
**Labels:** `pwa`, `offline`, `service-worker`, `advanced`  
**Description:**  
Add offline support using Service Workers. Users should be able to edit pages offline, and changes should sync when connection is restored.

**Acceptance Criteria:**
- Service worker registration
- Cache pages and assets
- Queue offline changes
- Sync when online
- Conflict resolution for offline edits
- Offline indicator UI

**Files to Create/Modify:**
- `public/sw.js` (service worker)
- `src/lib/offline/queue.ts`
- `src/lib/offline/sync.ts`
- `src/components/ui/offline-indicator.tsx`

---

### Issue #23: Build AI Writing Assistant Integration
**Difficulty:** Hard  
**Labels:** `ai`, `feature`, `advanced`, `integration`  
**Description:**  
Integrate an AI writing assistant (OpenAI, Anthropic, or similar) to help users write, summarize, translate, and improve content. Add AI block type.

**Acceptance Criteria:**
- AI block type
- Text generation
- Text summarization
- Translation
- Tone adjustment
- API key management
- Rate limiting

**Files to Create/Modify:**
- `src/components/editor/AIBlock.tsx`
- `src/lib/ai/openai.ts` or similar
- `src/components/ui/ai-panel.tsx`
- `src/lib/firebase/functions.ts` (Cloud Functions for API)

---

### Issue #24: Implement Advanced Database Relations
**Difficulty:** Hard  
**Labels:** `database`, `relations`, `advanced`  
**Description:**  
Add relation properties to database views. Pages can have relations to other pages (e.g., "Project" page relates to "Task" pages). Implement rollup and formula properties.

**Acceptance Criteria:**
- Relation property type
- Link pages in relations
- Rollup properties (sum, count, etc.)
- Formula properties (calculated fields)
- Filter by relations
- Bidirectional relations

**Files to Create/Modify:**
- `src/components/database/RelationProperty.tsx`
- `src/components/database/RollupProperty.tsx`
- `src/components/database/FormulaProperty.tsx`
- `src/lib/database/relations.ts`

---

### Issue #25: Build Mobile App (React Native or PWA)
**Difficulty:** Hard  
**Labels:** `mobile`, `pwa`, `react-native`, `advanced`  
**Description:**  
Create a mobile app version using React Native or enhance the PWA for mobile. Should support touch gestures, mobile-optimized UI, and offline sync.

**Acceptance Criteria:**
- Responsive mobile UI
- Touch-optimized interactions
- Mobile navigation
- Push notifications
- App-like experience (PWA)
- Or native app (React Native)

**Files to Create/Modify:**
- Mobile-specific components
- `src/components/mobile/` directory
- PWA manifest updates
- Or new React Native project

---

### Issue #26: Implement Advanced Block Types (Equations, Embeds, etc.)
**Difficulty:** Hard  
**Labels:** `feature`, `editor`, `blocks`, `advanced`  
**Description:**  
Add advanced block types: LaTeX equations, embedded content (YouTube, Twitter, etc.), code blocks with syntax highlighting, and custom embeds.

**Acceptance Criteria:**
- LaTeX equation block
- Embed block (YouTube, Twitter, etc.)
- Enhanced code block with syntax highlighting
- Custom embed URLs
- Preview embeds
- Responsive embeds

**Files to Create/Modify:**
- `src/components/blocks/EquationBlock.tsx`
- `src/components/blocks/EmbedBlock.tsx`
- `src/components/blocks/CodeBlock.tsx` (enhance)
- TipTap extensions for each

---

### Issue #27: Build Analytics Dashboard
**Difficulty:** Hard  
**Labels:** `analytics`, `dashboard`, `advanced`  
**Description:**  
Create an analytics dashboard showing workspace statistics: page views, most active users, content growth, collaboration metrics, etc. Use Firebase Analytics or custom tracking.

**Acceptance Criteria:**
- Dashboard page
- Page view statistics
- User activity metrics
- Content growth charts
- Collaboration statistics
- Export analytics data
- Privacy-compliant tracking

**Files to Create/Modify:**
- `src/components/analytics/Dashboard.tsx`
- `src/components/analytics/Charts.tsx`
- `src/lib/analytics/tracking.ts`
- `src/lib/firebase/analytics.ts`

---

### Issue #28: Implement Webhook System for Integrations
**Difficulty:** Hard  
**Labels:** `integrations`, `webhooks`, `api`, `advanced`  
**Description:**  
Build a webhook system that allows external services to receive notifications when pages/blocks are created/updated. Include webhook management UI.

**Acceptance Criteria:**
- Webhook creation UI
- Webhook delivery system
- Retry logic for failed deliveries
- Webhook logs/history
- Security (signatures, authentication)
- Firebase Cloud Functions for delivery

**Files to Create/Modify:**
- `src/components/integrations/WebhookManager.tsx`
- `src/lib/firebase/functions.ts` (webhook delivery)
- `src/types/webhook.ts`
- Cloud Functions code

---

### Issue #29: Build Advanced Search with Full-Text Search
**Difficulty:** Hard  
**Labels:** `search`, `full-text`, `advanced`, `algolia`  
**Description:**  
Implement full-text search across all workspace content. Use Algolia, Elasticsearch, or Firebase Extensions. Support fuzzy matching, typo tolerance, and ranking.

**Acceptance Criteria:**
- Full-text search index
- Search across all content
- Fuzzy matching
- Typo tolerance
- Result ranking
- Search suggestions
- Search analytics

**Files to Create/Modify:**
- `src/components/search/FullTextSearch.tsx`
- `src/lib/search/algolia.ts` or similar
- Firebase Cloud Functions for indexing
- `src/lib/search/indexing.ts`

---

### Issue #30: Implement Advanced Security and Audit Logging
**Difficulty:** Hard  
**Labels:** `security`, `audit`, `logging`, `advanced`  
**Description:**  
Add comprehensive security features: audit logging, IP tracking, suspicious activity detection, 2FA support, and security settings page.

**Acceptance Criteria:**
- Audit log for all actions
- IP address tracking
- Suspicious activity alerts
- 2FA support (TOTP)
- Security settings page
- Export audit logs
- Admin security dashboard

**Files to Create/Modify:**
- `src/components/security/SecuritySettings.tsx`
- `src/components/security/AuditLog.tsx`
- `src/lib/security/audit.ts`
- `src/lib/security/2fa.ts`
- Firebase Cloud Functions for logging

---

## 📝 Notes for Contributors

1. **Before Starting:** Read `CONTRIBUTING.md` for guidelines
2. **Claiming Issues:** Comment on the GitHub issue to claim it
3. **Branch Naming:** Use `feature/issue-{number}-{description}` format
4. **Testing:** Ensure your changes work and don't break existing features
5. **Documentation:** Update relevant docs if needed
6. **PR Description:** Reference the issue number in your PR

## 🎯 Priority Issues

These issues are marked as high priority and would have significant impact:
- #21: Real-time Collaborative Editing (core feature)
- #22: Offline Support (user experience)
- #11: Collaboration Presence (user engagement)
- #13: Page Templates (onboarding)

---

**Good luck and happy coding! 🚀**
