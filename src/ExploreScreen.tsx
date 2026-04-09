import { PodcastSpotlightCard } from '@henrique-menezzo/dailywire-ds/components/podcast-spotlight-card'
import { Icon } from '@henrique-menezzo/dailywire-ds/components/icon'
import { DailyWireLogo } from './components/DailyWireLogo'
import podcastArtwork from './assets/podcast-artwork.png'
import artworkFrieren from './assets/artwork-frieren.png'
import styles from './ExploreScreen.module.css'

const CHIPS = ['Podcasts', 'Series', 'Movies', 'Live Q&A', 'Shorts'] as const

const SPOTLIGHT_EPISODES = [
  {
    id: '1',
    artworkSrc: podcastArtwork,
    publishedDate: 'MAR 19, 2025',
    episodeName: 'Ep. 2196 — A New Pope…Plus Will Trump RAISE Taxes?!',
    showName: 'The Ben Shapiro Show',
    episodeDuration: '1H 45MIN',
  },
  {
    id: '2',
    artworkSrc: artworkFrieren,
    publishedDate: 'APR 1, 2026',
    episodeName: 'Ep. 1 — The Journey Begins',
    showName: "Frieren: Beyond Journey's End",
    episodeDuration: '24 MIN',
  },
] as const

export type ExploreTheme = 'light' | 'dark'

export interface ExploreScreenProps {
  theme: ExploreTheme
  onThemeChange: (theme: ExploreTheme) => void
}

export function ExploreScreen({ theme, onThemeChange }: ExploreScreenProps) {
  return (
    <div className={styles.phone} data-explore-mock>
      <div className={styles.scroll}>
        <header className={styles.statusBar}>
          <span className={styles.statusTime} aria-hidden>
            9:41
          </span>
          <div className={styles.themeRow} role="group" aria-label="Tema">
            <button
              type="button"
              className={styles.themeBtn}
              aria-pressed={theme === 'light'}
              onClick={() => onThemeChange('light')}
            >
              Light
            </button>
            <button
              type="button"
              className={styles.themeBtn}
              aria-pressed={theme === 'dark'}
              onClick={() => onThemeChange('dark')}
            >
              Dark
            </button>
          </div>
          <span className={styles.statusSpacer} aria-hidden />
        </header>

        <nav className={styles.topNav} aria-label="Marca">
          <div className={styles.logo}>
            <DailyWireLogo />
          </div>
          <div className={styles.navIcons} aria-hidden />
        </nav>

        <div className={styles.chipsRow} role="tablist" aria-label="Categorias">
          {CHIPS.map((label) => (
            <button key={label} type="button" className={styles.chip} role="tab">
              {label}
            </button>
          ))}
        </div>

        <section className={styles.section} aria-labelledby="latest-heading">
          <h2 id="latest-heading" className={styles.sectionTitle}>
            Latest Episodes
          </h2>
          <div className={styles.cardsRow}>
            {SPOTLIGHT_EPISODES.map((ep) => (
              <PodcastSpotlightCard
                key={ep.id}
                artworkSrc={ep.artworkSrc}
                publishedDate={ep.publishedDate}
                episodeName={ep.episodeName}
                showName={ep.showName}
                episodeDuration={ep.episodeDuration}
                onPlay={() => console.log('play', ep.id)}
                onDownload={() => console.log('download', ep.id)}
                onShare={() => console.log('share', ep.id)}
              />
            ))}
          </div>
        </section>
      </div>

      <nav className={styles.tabBar} aria-label="Navegação principal">
        <div className={styles.tabBarInner}>
          <button type="button" className={styles.tabItem}>
            <span className={styles.tabIcon}>
              <Icon name="home-1" size="lg" />
            </span>
            <span className={styles.tabLabel}>Home</span>
          </button>
          <button type="button" className={styles.tabItem}>
            <span className={`${styles.tabIcon} ${styles.tabIconActive}`}>
              <Icon name="player-play-outline" size="lg" />
            </span>
            <span className={`${styles.tabLabel} ${styles.tabLabelActive}`}>
              Explore
            </span>
          </button>
          <button type="button" className={styles.tabItem}>
            <span className={styles.tabIcon}>
              <Icon name="search" size="lg" />
            </span>
            <span className={styles.tabLabel}>Search</span>
          </button>
          <button type="button" className={styles.tabItem}>
            <span className={styles.profileAvatar} aria-hidden>
              DW
            </span>
            <span className={styles.tabLabel}>Profile</span>
          </button>
        </div>
        <div className={styles.homeIndicator} aria-hidden>
          <div className={styles.homeIndicatorBar} />
        </div>
      </nav>
    </div>
  )
}
