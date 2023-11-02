import useMobile from '@/hooks/useMobile';

import DesktopSea from './desktop/desktop';
import MobileSea from './mobile/mobile';

export default function Sea() {
  const isMobile = useMobile();
  return isMobile ? <MobileSea /> : <DesktopSea />;
}
