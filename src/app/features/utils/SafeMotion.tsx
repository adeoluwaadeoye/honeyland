import { motion } from "framer-motion";


export function SafeMotion({ ...props }: React.ComponentProps<typeof motion.div>) {
  return <motion.div {...props} />;
}
export default SafeMotion;