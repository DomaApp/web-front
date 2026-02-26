const AppleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.34.19.72.24 1.09.17L15.39 12 12 8.61 3.18 23.76zM22.47 10.23L19.9 8.78l-3.19 3.19 3.22 3.22 2.6-1.46c.74-.42.74-1.08-.06-1.5zM1.55.31C1.27.62 1.1 1.1 1.1 1.72v20.56c0 .62.17 1.1.45 1.41l.08.07L12.62 12.9v-.26L1.63.25l-.08.06zM15.39 12L4.27.07c-.37-.07-.75-.02-1.09.17L15.39 12z"/>
  </svg>
)

export default function StoreButton({ store = 'apple', href = '#' }) {
  const isApple = store === 'apple'

  return (
    <a href={href} className="btn-store">
      {isApple ? <AppleIcon /> : <GoogleIcon />}
      <span style={{ lineHeight: 1.2 }}>
        <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 400, opacity: 0.7 }}>
          {isApple ? 'Download on the' : 'Get it on'}
        </span>
        <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600 }}>
          {isApple ? 'App Store' : 'Google Play'}
        </span>
      </span>
    </a>
  )
}
