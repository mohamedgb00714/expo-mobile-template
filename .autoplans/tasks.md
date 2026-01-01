# Project Tasks

This file tracks all tasks for the Expo Mobile Application project.

## Task Organization

Tasks are managed through AutoPlans.dev and can be viewed/updated using:
- `autoplans_list_tasks({projectId})` - List all tasks
- `autoplans_create_task({projectId, title, description, priority, type})` - Create new task
- `autoplans_update_task({taskId, status, priority, ...})` - Update existing task

## Initial Setup Tasks

### Not Started
- [ ] Configure app.json (name, slug, icons, splash screen)
- [ ] Set up navigation structure
- [ ] Configure environment variables
- [ ] Set up push notifications (Expo Notifications)
- [ ] Configure deep linking
- [ ] Add app icons and splash screen
- [ ] Set up error tracking (Sentry)
- [ ] Configure EAS Build for production builds
- [ ] Test on real iOS device
- [ ] Test on real Android device

### UI/UX Tasks
- [ ] Design app theme (colors, typography)
- [ ] Create reusable components
- [ ] Implement responsive layouts
- [ ] Add loading states and skeletons
- [ ] Implement error handling UI
- [ ] Add animations and transitions
- [ ] Ensure accessibility (screen readers)

### Features
- [ ] Implement authentication flow
- [ ] Add offline support (AsyncStorage)
- [ ] Implement data fetching
- [ ] Add image uploading (Expo ImagePicker)
- [ ] Implement camera functionality
- [ ] Add location services (if needed)
- [ ] Set up push notifications

### Platform-Specific
- [ ] Test iOS-specific features
- [ ] Test Android-specific features
- [ ] Handle platform-specific UI differences
- [ ] Configure app permissions (iOS/Android)
- [ ] Test on different screen sizes

### Template Setup Complete
- [x] Expo application initialized
- [x] TypeScript configured
- [x] Expo Router setup
- [x] Base folder structure created

## Development Guidelines

### Mobile-First Development
- **Touch targets**: Minimum 44x44 points for touchable elements
- **Safe areas**: Use SafeAreaView for notch/status bar
- **Platform differences**: Handle iOS/Android UI differences
- **Performance**: Optimize for mobile (lazy load, memoization)

### Navigation
- **File-based routing**: Use Expo Router (similar to Next.js)
- **Stack navigation**: For hierarchical screens
- **Tab navigation**: For main app sections
- **Modal navigation**: For temporary screens

### State Management
- **Local state**: useState for component-level state
- **Global state**: Context API or Zustand for app-wide state
- **Async storage**: For persistent data

### Task Management
When creating tasks:
- Use descriptive titles
- Include acceptance criteria
- Set priority: `low`, `medium`, `high`, or `critical`
- Choose type: `coding`, `design`, `documentation`, `testing`, or `other`

## Subtasks

Individual task subtasks are stored in `.autoplans/tasks/{task-id}.md`

---
*Last Updated: Auto-generated on project creation*
