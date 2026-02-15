/**
 * SECTION SKELETON LOADER
 * Simple loading placeholder for lazy-loaded sections
 */

export function SectionSkeleton() {
  return (
    <div className="w-full py-20 animate-pulse">
      <div className="w-[90%] md:w-[80%] mx-auto max-w-7xl">
        {/* Header skeleton */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="h-12 w-64 bg-gray-200 dark:bg-gray-800 rounded-lg mb-4"></div>
          <div className="h-6 w-96 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
        </div>

        {/* Content skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
