interface RobotsEntry {
    /**
     * Array of paths to allow crawling
     */
    allow?: string[];
    /**
     * Array of paths to disallow crawling
     */
    disallow?: string[];
    /**
     * Sitemap to use for the policy
     */
    sitemap?: string[];
    /**
     * User agent to apply the policy to
     */
    userAgent: string;
    /**
     * Crawl delay for the user agent
     */
    crawlDelay?: number;
}
/**
 * Helper method used to generate a robots.txt from all the provided policies.
 *
 * @param policies - Array of policies to generate from
 * @returns Robots.txt as a string
 */
declare function generateRobotsTxt(policies?: RobotsEntry[]): string;

export { type RobotsEntry, generateRobotsTxt };
