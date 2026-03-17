# Website Design Recreation

## Workflow

When the user provides a reference image (screenshot) and optionally some CSS classes or style notes:

  *I for Command, *L for Agent

1. **Generate** a single `index.html` file using Tailwind CSS (via CDN). Include all content inline — no external files unless requested.
2. **Screenshot** the rendered page using Puppeteer (`npx puppeteer screenshot index.html --fullpage` or equivalent). If the page has distinct sections, capture those individually too.
3. **Compare** your screenshot against the reference image. Check for mismatches in:
   - Spacing and padding (measure in px)
   - Font sizes, weights, and line heights
   - Colors (exact hex values)
   - Alignment and positioning
   - Border radii, shadows, and effects
   - Responsive behavior
   - Image/icon sizing and placement
4. **Fix** every mismatch found. Edit the HTML/Tailwind code.
5. **Re-screenshot** and compare again.
6. **Repeat** steps 3–5 until the result is within ~2–3px of the reference everywhere.

Do NOT stop after one pass. Always do at least 2 comparison rounds. Only stop when the user says so or when no visible differences remain.

### Section-by-Section Approach
- Work one section at a time (header, hero, features, footer) rather than the full page — this gives more control and precision.
- Use 3–5 iterative messages max per section to reach 80–90% match, then move on to the next section.
- Disable the screenshot loop for heavily animated components (inconsistent frame captures).

## Technical Defaults

- Use Tailwind CSS **v3** via CDN (`<script src="https://cdn.tailwindcss.com"></script>`) — do not mix v3 and v4 syntax
- Use placeholder images from `https://placeholder.co/` when source images aren't provided
- Use Google Fonts via CDN when the reference uses non-system fonts
- Mobile-first responsive design
- Single `index.html` file unless the user requests otherwise
- Prefer WebP format for any provided images
- Responsive breakpoints: mobile (default), tablet (md: 768px), desktop (lg: 1024px)

## Design System

Before building, extract from the reference image:
- **Color palette**: primary, secondary, accent, neutral — extract exact hex values
- **Typography**: font families, weights, and size scale — default fonts signal default thinking
- **Spacing rhythm**: use Tailwind's spacing scale consistently (4, 8, 16, 24, 32, 48px)
- **Heading hierarchy**: maintain consistent sizing progression (e.g., h1 > h2 > h3)
- **Interactive states**: hover, focus, and active styles matching the reference
- **Container padding**: minimum 24px (p-6) on all containers

## Rules

- Do not add features, sections, or content not present in the reference image
- Match the reference exactly — do not "improve" the design
- If the user provides CSS classes or style tokens, use them verbatim
- Keep code clean but don't over-abstract — inline Tailwind classes are fine
- When comparing screenshots, be specific about what's wrong (e.g., "heading is 32px but reference shows ~24px", "gap between cards is 16px but should be 24px")
- No Lorem Ipsum — use the reference's actual text or realistic placeholder copy
- No gradients unless they appear in the reference
- Match the reference's typography exactly — never fall back to generic system fonts
- Do not add hamburger menus, icons, or decorative elements not in the reference

## Anti-Patterns

NEVER:
- Use generic system fonts when the reference uses custom typography
- Add animations or transitions not present in the reference
- Use clichéd color schemes or predictable layouts that differ from the reference
- Skip hover/focus states that are visible in the reference
- Mix Tailwind v3 and v4 syntax in the same file
- Add placeholder images where the reference has none
- Over-engineer with unnecessary abstractions or component splits

## Verification

- Compare section-by-section, not the whole page at once
- Check WCAG color contrast on all text elements
- Verify responsive behavior at mobile (default), tablet (md: 768px), and desktop (lg: 1024px) breakpoints
- Test all interactive states (hover, focus, active) against the reference
- Use browser DevTools to measure exact spacing and font sizes when in doubt
- Final check: open the page side-by-side with the reference at the same viewport width
