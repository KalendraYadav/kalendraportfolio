# Portrait Assets Directory

This directory stores portrait visual assets for Kalendra Yadav's personal developer portfolio.

---

## Current Asset
- `placeholder-avatar.svg`: Signature vector pop-art placeholder avatar using the Cobalt Blue (`#0047FF`), Pop Red (`#FF3333`), Cyber Yellow (`#FFE600`), and Cyber Cyan (`#00E5FF`) palette with embedded halftone texture.

---

## How to Add Your Real Portrait Photograph

When you are ready to use your real photograph:

1. **Prepare Your Photograph**:
   - **Recommended Format**: `.webp` (optimal for Next.js image optimization) or high-quality `.png` / `.jpg`.
   - **Aspect Ratio**: `1:1` square (e.g., `800x800px` to `1200x1200px`) or `4:5` vertical ratio (`800x1000px`).
   - **Lighting & Pose**: Clear lighting with strong contrast between subject and background. Forward-facing or 3/4 upward angle works best with pop-art duotone treatments.
2. **Save the Image**:
   - Save the file as `public/images/portrait/kalendra-portrait.webp`.
3. **Connect in Code**:
   - In `src/config/site.ts`, set `portrait.src` to `"/images/portrait/kalendra-portrait.webp"`.
   - The `<HalftonePortrait />` component will automatically render your photo using the pop-art screenprint duotone filter and halftone dot overlay!
