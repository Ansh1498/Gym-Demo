import { MotionConfig } from "framer-motion";
import AppRoutes from "@/routes/AppRoutes";
import ScrollToTop from "@/components/layout/ScrollToTop";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <AppRoutes />
    </MotionConfig>
  );
}