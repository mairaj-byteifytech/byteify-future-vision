
import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'default';
  size?: 'sm' | 'md' | 'lg' | 'icon' | 'default';
  withArrow?: boolean;
}

// Export both as named export and default
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'primary', size = 'md', withArrow = false, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variantClasses = {
      primary: "bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light focus-visible:ring-byteify-accent-dark",
      secondary: "bg-byteify-dark text-white hover:bg-byteify-darker focus-visible:ring-byteify-gray",
      outline: "border border-byteify-gray text-byteify-dark hover:bg-secondary focus-visible:ring-byteify-gray",
      ghost: "hover:bg-secondary text-byteify-dark focus-visible:ring-byteify-gray",
      default: "bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light focus-visible:ring-byteify-accent-dark"
    };
    
    const sizeClasses = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-5 text-base",
      lg: "h-14 px-8 text-lg",
      icon: "h-10 w-10 p-2",
      default: "h-11 px-5 text-base"
    };

    // Handle default values to maintain compatibility
    const resolvedVariant = variant || 'primary';
    const resolvedSize = size || 'md';

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[resolvedVariant],
          sizeClasses[resolvedSize],
          className
        )}
        ref={ref}
        {...props}
      >
        <span>{children}</span>
        {withArrow && (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

// Export buttonVariants function for other components that need it
export const buttonVariants = ({
  variant = 'primary',
  size = 'md',
  className = '',
}: {
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  className?: string;
} = {}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variantClasses = {
    primary: "bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light focus-visible:ring-byteify-accent-dark",
    secondary: "bg-byteify-dark text-white hover:bg-byteify-darker focus-visible:ring-byteify-gray",
    outline: "border border-byteify-gray text-byteify-dark hover:bg-secondary focus-visible:ring-byteify-gray",
    ghost: "hover:bg-secondary text-byteify-dark focus-visible:ring-byteify-gray",
    default: "bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light focus-visible:ring-byteify-accent-dark"
  };
  
  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-base",
    lg: "h-14 px-8 text-lg",
    icon: "h-10 w-10 p-2",
    default: "h-11 px-5 text-base"
  };

  // Handle default values to maintain compatibility
  const resolvedVariant = variant || 'primary';
  const resolvedSize = size || 'md';

  return cn(
    baseClasses,
    variantClasses[resolvedVariant],
    sizeClasses[resolvedSize],
    className
  );
};

// Re-export the ButtonProps type
export type { ButtonProps };

// Default export for backward compatibility
export default Button;
