import useMobile from '@/hooks/useMobile';

import DesktopSpace from './desktop/desktop';
import MobileSpace from './mobile/mobile';

export default function Space() {
  const isMobile = useMobile();
  return isMobile ? <MobileSpace /> : <DesktopSpace />;
}
