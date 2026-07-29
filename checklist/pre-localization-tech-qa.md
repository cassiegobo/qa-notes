# Pre-Localization Technical QA
> Technical validation checklist performed before localization or translation begins.

## Purpose

This checklist validates whether an enterprise CMS page is technically ready to enter the localization workflow.
The objective is to ensure that translators receive a stable, correctly configured page before translation begins.

Typical platforms:
- Adobe Experience Manager (AEM)
- Drupal
- Other Enterprise CMS platforms

---

### Page Properties

#### Basic
- [ ] Page Title
- [ ] Metadata
- [ ] Focus Area
- [ ] Page Owner

#### SEO
- [ ] No Index is disabled unless intentionally required
- [ ] No Follow is disabled unless intentionally required
- [ ] Source page is correct
- [ ] Status is correct

----

### Live Copy

#### Rollout Configurations
Verify the rollout configurations. Incorrect settings may cause replication or localization workflow failures.

Typical validations include:
- [ ] Standard Rollout Configuration
- [ ] Activate on Blueprint Activation
- [ ] Deactivate on Blueprint Deactivation
- [ ] Update Links Rollout

If validating Experience Fragments (reusable content components):
- [ ] Standard Rollout Configuration
- [ ] Update Links Rollout

---

#### Author Mode Validation
Verification performed inside the CMS authoring environment, typically using Preview mode.

- [ ] Components render correctly
- [ ] Images load correctly
- [ ] Structure is complete
- [ ] Missing components
- [ ] Broken authoring components

---

# Link Validation

- [ ] Run automated link validation
- [ ] Verify reported broken links
- [ ] Review redirects

---

# Ready for Localization
Before sending the page for translation:

- [ ] CMS configuration validated
- [ ] Live Copy validated
- [ ] Links validated
- [ ] SEO reviewed
- [ ] Ready for localization
