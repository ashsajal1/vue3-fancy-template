# Security Policy 🔒

[![Security](https://img.shields.io/badge/Security-Policy-blue.svg)](https://github.com/ashsajal1/vue3-fancy-template/security/policy)

We take security seriously in the Vue 3 Fancy Template. Please help us maintain safe and secure projects for everyone.

## 🚨 Reporting Vulnerabilities

### Responsible Disclosure
Please **DO NOT** report security vulnerabilities through public GitHub issues. Instead, use either:

1. **GitHub Security Advisory**:  
   [Open a security advisory](https://github.com/ashsajal1/vue3-fancy-template/security/advisories/new)

2. **Email**:  
   ashsajal@yahoo.com

### What to Include
- Detailed description of the vulnerability
- Steps to reproduce
- Potential impact assessment
- Any suggested mitigations

### Response Expectations
- ⏳ Initial response within **48 hours**
- 📅 Regular status updates
- 🛠 Critical fixes within **14 days** of confirmation

## 🛡 Security Practices

### Template Security Measures
- Regular dependency updates (npm audit)
- Pinia state management security patterns
- PrimeVue component secure configurations
- TypeScript strict mode enforcement
- CI/CD security checks (npm audit in workflows)

### Secure Development Guidelines
1. **Dependencies**:  
   - Regular `npm audit` checks
   - Pinned dependency versions in lockfile
   - Security-focused dependency updates

2. **Code Practices**:
   - Input sanitization for user-provided data
   - Secure Vue template practices
   - Type-safe state management with Pinia
   - CSP-compliant frontend patterns

3. **CI/CD**:
   - Automated security scanning
   - Dependency vulnerability checks
   - Linting for security anti-patterns

## 🔄 Disclosure Policy

Accepted vulnerabilities will be:
1. Patched in a timely manner
2. Disclosed through:
   - GitHub Security Advisory
   - Release notes
   - Project documentation
3. Credited to reporter (unless anonymous)

## ⚠️ Dependency Security

This template relies on:
- Vue 3 (security advisories: https://github.com/vuejs/core/security)
- PrimeVue (security: https://primefaces.org/primevue/security)
- Pinia (security: https://github.com/vuejs/pinia/security)
- Tailwind CSS (security: https://github.com/tailwindlabs/tailwindcss/security)

**Always**:  
- Keep dependencies updated
- Monitor dependency security advisories
- Use `npm audit` regularly

## 🙏 Acknowledgements

We gratefully acknowledge security researchers who responsibly disclose vulnerabilities.  
[See contributors](https://github.com/ashsajal1/vue3-fancy-template/graphs/contributors) who helped improve security.

---

🔍 **Need More Info?**  
See GitHub's [Security Documentation](https://docs.github.com/en/code-security/getting-started/github-security-features)
