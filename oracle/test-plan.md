# Oracle Website Validation Test Plan

> Validation planning document for Oracle's public website.

---

## 1. Project Information

| Field | Value |
|-------|-------|
| Company | Oracle |
| Website | Oracle |
| Page | Education |
| URL | https://www.oracle.com/government/education/ |
| Tester | Cassie Gobo |
| Date | 2026-07-28 |
| Browser | Google Chrome |
| Device | Desktop |
| Screen Resolution | 1920 × 1080 |
| Status | ◐ In Progress |

---

## 2. Objective

Validate Oracle's public Education page to determine whether it is ready for public release by verifying functionality, localization, accessibility and overall user experience.

---

## 3. Scope

### ✓ In Scope

- Functional validation
- Navigation
- Link validation
- Content validation
- Localization validation
- Responsive behaviour
- Accessibility-related validation
- Release readiness

### ✕ Out of Scope

- Backend validation
- API testing
- Performance testing
- Security testing
- Source code review

---

## 4. Test Types

| Status | Validation |
|--------|------------|
| ✓ | Functional Testing |
| ✓ | Localization Validation |
| ✓ | Accessibility Validation |
| ✓ | Responsive Validation |
| ○ | Cross-browser Testing (not executed) |
| ○ | Regression Testing (not applicable) |

---

## 5. Locale Coverage

The following locales will be validated whenever available for the selected page.

| Locale | Status | Notes |
|--------|--------|------|
| EN | ◐ | Pending validation |
| DE | ○ | Pending |
| PT-BR | ○ | Pending |
| JA | ○ | Pending |
| ZH-CN | ○ | Pending |
| AR | ○ | Pending |

### Legend

| Symbol | Meaning |
|--------|---------|
| ○ | Not Tested |
| ◐ | In Progress |
| ✓ | Approved |
| ! | Fix Needed |
| ✕ | Blocked |

---

## 6. Validation Checklist

### Functionality

- [ ] Page loads successfully
- [ ] Navigation works as expected
- [ ] Internal links work correctly
- [ ] External links open as expected
- [ ] Redirects behave correctly

### Content

- [ ] Content is visible
- [ ] Images load correctly
- [ ] No broken components
- [ ] No overlapping elements
- [ ] No obvious layout issues

### Localization

- [ ] Locale is available
- [ ] Content is localized when applicable
- [ ] Language matches the selected locale
- [ ] Date format is correct
- [ ] Number format is correct
- [ ] Currency format is correct
- [ ] RTL layout behaves correctly when applicable

### Accessibility

- [ ] Images contain alt text
- [ ] Interactive elements have accessible labels (visual inspection)
- [ ] Keyboard navigation is possible
- [ ] Visible focus indicator
- [ ] No obvious colour contrast issues

### Responsive

- [ ] Desktop
- [ ] Tablet
- [ ] Mobile

---

## 7. Entry Criteria

- ✓ Website publicly available
- ✓ Page accessible
- ✓ No authentication required

---

## 8. Exit Criteria

- ✓ Validation completed
- ✓ Issues documented
- ✓ Release recommendation provided

---

## 9. Release Recommendation

Current status:

- ◐ In Progress

Final recommendation:

- ○ Approved
- ○ Fix Needed
- ○ Blocked

---

## 10. Notes

This project follows a standardized validation approach used throughout this repository.

The objective is to simulate a manual Enterprise Web QA validation process based on publicly accessible pages, documenting findings related to functionality, localization, accessibility and release readiness.

---

## 11. Related Documents

→ Test Cases

→ Bug Report

→ Release Validation Report

→ Evidence / Screenshots
