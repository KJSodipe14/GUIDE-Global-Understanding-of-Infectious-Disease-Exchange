// Shared line-icon set — same stroke style as Home.jsx's icons, so the whole
// app (hero, sidebar, map popups) reads as one consistent design instead of
// switching between custom icons and default emoji.
const ICON_PATHS = {
  pin: (
    <>
      <path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  plane: <path d="M3 13l6-1 4-7 2 .5-2 6.5 6 1v2l-6 1 1 4-2 .5-3-4-5 1-1-2 3-2-3-1z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  connection: (
    <>
      <circle cx="6" cy="7" r="2" />
      <circle cx="18" cy="17" r="2" />
      <path d="M7.7 8.3C10 11 14 13 16.3 15.7" strokeDasharray="1 3" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />,
}

function Icon({ name, size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", verticalAlign: "-2px" }}
    >
      {ICON_PATHS[name]}
    </svg>
  )
}

export default Icon