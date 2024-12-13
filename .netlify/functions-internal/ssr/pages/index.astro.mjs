/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent, e as renderSlot, f as renderHead, g as defineScriptVars, F as Fragment } from '../chunks/astro/server_BkyEGgOy.mjs';
import 'kleur/colors';
import 'clsx';
import { format } from 'date-fns';
export { renderers } from '../renderers.mjs';

const $$Astro$d = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Logo;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex items-center", className], "class:list")} data-astro-cid-tvrurpns> <svg class="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-tvrurpns> <path d="M12 2L1 21h22L12 2z" fill="currentColor" data-astro-cid-tvrurpns></path> <path d="M12 6l7.5 13h-15L12 6z" fill="white" data-astro-cid-tvrurpns></path> <path class="animate-pulse-subtle" d="M12 10l4.5 7.8h-9L12 10z" fill="currentColor" opacity="0.3" data-astro-cid-tvrurpns></path> </svg> <div class="ml-2" data-astro-cid-tvrurpns> <span class="text-2xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600" data-astro-cid-tvrurpns>doorillio</span> <span class="block text-[6px] text-gray-500 -mt-1 tracking-[0.25em] uppercase font-medium" data-astro-cid-tvrurpns>Health & Wellness</span> </div> </div> `;
}, "/home/project/src/components/Logo.astro", void 0);

const $$Astro$c = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Input;
  const {
    type = "text",
    placeholder = "",
    required = false,
    class: className = ""
  } = Astro2.props;
  const baseStyles = "px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent";
  return renderTemplate`${maybeRenderHead()}<input${addAttribute(type, "type")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute([baseStyles, className], "class:list")}>`;
}, "/home/project/src/components/ui/Input.astro", void 0);

const $$SearchBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative w-40"> <div class="absolute inset-y-0 left-2 flex items-center pointer-events-none"> <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> ${renderComponent($$result, "Input", $$Input, { "type": "search", "placeholder": "Search...", "class": "pl-8 py-1.5 text-sm w-full h-7 rounded-md" })} </div>`;
}, "/home/project/src/components/SearchBar.astro", void 0);

const $$Astro$b = createAstro();
const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SocialIcons;
  const { class: className = "" } = Astro2.props;
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/healthylife",
      icon: "M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.58v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z",
      color: "text-blue-400"
    },
    {
      name: "Facebook",
      href: "https://facebook.com/healthylife",
      icon: "M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z",
      color: "text-blue-600"
    },
    {
      name: "Instagram",
      href: "https://instagram.com/healthylife",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
      color: "text-pink-600"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex items-center space-x-4", className], "class:list")}> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`${social.color} hover:opacity-80 transition-opacity`, "class")}${addAttribute(`Follow us on ${social.name}`, "aria-label")}> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path${addAttribute(social.icon, "d")}></path> </svg> </a>`)} </div>`;
}, "/home/project/src/components/SocialIcons.astro", void 0);

const $$Astro$a = createAstro();
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className], "class:list")} data-astro-prefetch="visible"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/project/src/components/navigation/NavLink.astro", void 0);

const $$Astro$9 = createAstro();
const $$DesktopNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$DesktopNav;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="hidden xl:flex items-center space-x-6 ml-12"> ${items.map((item) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "href": item.href, "class": "text-gray-700 hover:text-emerald-500 transition-colors text-sm font-medium whitespace-nowrap group" }, { "default": ($$result2) => renderTemplate` <span class="inline-block pb-1 border-b-2 border-transparent group-hover:border-emerald-500"> ${item.name} </span> ` })}`)} </nav>`;
}, "/home/project/src/components/navigation/DesktopNav.astro", void 0);

const $$Astro$8 = createAstro();
const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MobileMenu;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="hidden xl:hidden bg-white border-t border-gray-100" id="mobile-menu"> <nav class="px-4 py-2 space-y-1"> ${items.map((item) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "href": item.href, "class": "block px-4 py-3 text-base font-medium text-gray-700 hover:text-emerald-500 hover:bg-gray-50 rounded-lg" }, { "default": ($$result2) => renderTemplate`${item.name}` })}`)} </nav> </div>`;
}, "/home/project/src/components/navigation/MobileMenu.astro", void 0);

const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "Nutrition", href: "/nutrition" },
  { name: "Fitness", href: "/fitness" },
  { name: "Mental Health", href: "/mental-health" },
  { name: "Wellness", href: "/wellness" }
];

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-sm sticky top-0 z-50"> <div class="container mx-auto px-4"> <div class="flex items-center justify-between h-16"> <div class="flex items-center flex-1"> <a href="/" class="flex items-center"> ${renderComponent($$result, "Logo", $$Logo, {})} </a> ${renderComponent($$result, "DesktopNav", $$DesktopNav, { "items": mainNavigation })} </div> <div class="flex items-center space-x-6"> ${renderComponent($$result, "SearchBar", $$SearchBar, {})} ${renderComponent($$result, "SocialIcons", $$SocialIcons, { "class": "hidden md:flex" })} <button class="xl:hidden text-gray-700 hover:text-emerald-500" aria-label="Toggle menu" aria-expanded="false" id="menu-toggle"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </div> ${renderComponent($$result, "MobileMenu", $$MobileMenu, { "items": mainNavigation })} </header> `;
}, "/home/project/src/components/Header.astro", void 0);

const $$Astro$7 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    type = "button",
    variant = "primary",
    class: className = ""
  } = Astro2.props;
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-colors";
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700",
    secondary: "bg-white text-emerald-600 hover:bg-gray-100",
    outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
  };
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute([baseStyles, variants[variant], className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "/home/project/src/components/ui/Button.astro", void 0);

const $$NewsletterBox = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-r from-emerald-500 to-teal-600 p-8 rounded-lg shadow-md text-white"> <div class="flex flex-col items-center text-center"> <svg class="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <h2 class="text-2xl font-bold mb-2">Get Health Tips in Your Inbox</h2> <p class="text-white/80 mb-6">Join 50,000+ subscribers who receive our weekly health insights.</p> <form class="w-full max-w-md"> <div class="flex gap-2"> ${renderComponent($$result, "Input", $$Input, { "type": "email", "placeholder": "Your email address", "required": true, "class": "flex-1" })} ${renderComponent($$result, "Button", $$Button, { "type": "submit", "variant": "secondary" }, { "default": ($$result2) => renderTemplate`
Subscribe
` })} </div> </form> <p class="text-sm mt-4 text-white/60">No spam. Unsubscribe anytime.</p> </div> </div>`;
}, "/home/project/src/components/NewsletterBox.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900"> <div class="container mx-auto px-4"> <!-- Newsletter Section --> <div class="py-16 border-b border-gray-800"> ${renderComponent($$result, "NewsletterBox", $$NewsletterBox, {})} </div> <!-- Main Footer Content --> <div class="py-12 grid grid-cols-1 md:grid-cols-4 gap-8"> <div> ${renderComponent($$result, "Logo", $$Logo, { "class": "text-white" })} <p class="mt-4 text-gray-400">Empowering your journey to better living through expert insights and practical guidance.</p> <!-- Social Icons --> <div class="mt-6 flex space-x-4"> <a href="#" class="text-gray-400 hover:text-emerald-500 transition-colors"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg> </a> <a href="#" class="text-gray-400 hover:text-emerald-500 transition-colors"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg> </a> <a href="#" class="text-gray-400 hover:text-emerald-500 transition-colors"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg> </a> <a href="#" class="text-gray-400 hover:text-emerald-500 transition-colors"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg> </a> </div> </div> <div> <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3> <ul class="space-y-3"> <li><a href="/articles" class="text-gray-400 hover:text-emerald-500 transition-colors">Latest Articles</a></li> <li><a href="/guides" class="text-gray-400 hover:text-emerald-500 transition-colors">Health Guides</a></li> <li><a href="/experts" class="text-gray-400 hover:text-emerald-500 transition-colors">Expert Advice</a></li> <li><a href="/community" class="text-gray-400 hover:text-emerald-500 transition-colors">Community</a></li> </ul> </div> <div> <h3 class="text-lg font-semibold text-white mb-4">Categories</h3> <ul class="space-y-3"> <li><a href="/nutrition" class="text-gray-400 hover:text-emerald-500 transition-colors">Nutrition</a></li> <li><a href="/fitness" class="text-gray-400 hover:text-emerald-500 transition-colors">Fitness</a></li> <li><a href="/mental-health" class="text-gray-400 hover:text-emerald-500 transition-colors">Mental Health</a></li> <li><a href="/wellness" class="text-gray-400 hover:text-emerald-500 transition-colors">Wellness</a></li> </ul> </div> <div> <h3 class="text-lg font-semibold text-white mb-4">Company</h3> <ul class="space-y-3"> <li><a href="/about" class="text-gray-400 hover:text-emerald-500 transition-colors">About Us</a></li> <li><a href="/contact" class="text-gray-400 hover:text-emerald-500 transition-colors">Contact</a></li> <li><a href="/careers" class="text-gray-400 hover:text-emerald-500 transition-colors">Careers</a></li> <li><a href="/press" class="text-gray-400 hover:text-emerald-500 transition-colors">Press Kit</a></li> </ul> </div> </div> <div class="py-6 border-t border-gray-800"> <div class="flex flex-col md:flex-row justify-between items-center"> <p class="text-gray-400">&copy; ${currentYear} Doorillio. All rights reserved.</p> <div class="flex space-x-6 mt-4 md:mt-0"> <a href="/privacy" class="text-gray-400 hover:text-emerald-500 transition-colors">Privacy Policy</a> <a href="/terms" class="text-gray-400 hover:text-emerald-500 transition-colors">Terms of Service</a> <a href="/cookies" class="text-gray-400 hover:text-emerald-500 transition-colors">Cookie Policy</a> </div> </div> </div> </div> </footer>`;
}, "/home/project/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Expert insights and practical guidance for better living",
    image = "/default-og-image.jpg",
    type = "website",
    canonicalUrl = Astro2.url.href
  } = Astro2.props;
  const siteTitle = "Health & Wellness Blog";
  const fullTitle = `${title} | ${siteTitle}`;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"', "><title>", '</title><!-- SEO Meta Tags --><meta name="robots" content="index, follow"><meta name="author"', '><meta name="keywords" content="health, wellness, nutrition, fitness, mental health"><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:site_name"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- Structured Data --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "WebSite",\n        "name": "{siteTitle}",\n        "description": "{description}",\n        "url": "{Astro.url.href}",\n        "potentialAction": {\n          "@type": "SearchAction",\n          "target": "{Astro.url.origin}/search?q={search_term_string}",\n          "query-input": "required name=search_term_string"\n        }\n      }\n    </script><!-- Preload critical assets --><link rel="preload" as="image" href="/logo.svg">', '</head> <body class="min-h-screen bg-gray-50 font-sans"> ', ' <main class="container mx-auto px-4 py-8"> ', " </main> ", " </body></html>"])), addAttribute(description, "content"), addAttribute(canonicalUrl, "href"), fullTitle, addAttribute(siteTitle, "content"), addAttribute(type, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(Astro2.url.href, "content"), addAttribute(siteTitle, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(image, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/project/src/layouts/Layout.astro", void 0);

const $$Astro$5 = createAstro();
const $$FeaturedArticle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FeaturedArticle;
  const { title, description, image, category, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="relative overflow-hidden rounded-lg shadow-lg"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-64 object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> <div class="absolute bottom-0 p-6"> <span class="text-emerald-400 text-sm font-medium">${category}</span> <h3 class="text-2xl font-bold text-white mt-2"> <a${addAttribute(href, "href")} class="hover:underline">${title}</a> </h3> <p class="text-gray-300 mt-2">${description}</p> </div> </article>`;
}, "/home/project/src/components/FeaturedArticle.astro", void 0);

const $$Astro$4 = createAstro();
const $$ArticleDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ArticleDate;
  const { date, class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}${addAttribute(["text-sm text-gray-500", className], "class:list")}> ${format(date, "MMM d, yyyy")} </time>`;
}, "/home/project/src/components/common/ArticleDate.astro", void 0);

const featuredArticle = {
  title: "10 Science-Backed Ways to Improve Your Health",
  description: "Discover evidence-based strategies to enhance your physical and mental well-being.",
  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  category: "Wellness",
  href: "/articles/improve-health"
};
const latestArticles = [
  {
    title: "The Ultimate Guide to Balanced Nutrition",
    description: "Learn how to create a balanced diet that fuels your body and mind.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Nutrition",
    href: "/articles/balanced-nutrition"
  },
  {
    title: "5 Essential Exercises for Core Strength",
    description: "Build a strong foundation with these effective core exercises.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Fitness",
    href: "/articles/core-strength"
  },
  {
    title: "Mindfulness Techniques for Better Mental Health",
    description: "Simple practices to reduce stress and improve mental well-being.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mental Health",
    href: "/articles/mindfulness-techniques"
  }
];
const trendingArticles = [
  {
    title: "7 Morning Habits That Boost Your Metabolism",
    views: "234K",
    date: /* @__PURE__ */ new Date("2024-03-15"),
    href: "/articles/morning-habits-metabolism",
    category: "Wellness",
    image: "",
    description: ""
  },
  {
    title: "Foods to Avoid If You Have High Blood Pressure",
    views: "198K",
    date: /* @__PURE__ */ new Date("2024-03-14"),
    href: "/articles/foods-high-blood-pressure",
    category: "Nutrition",
    image: "",
    description: ""
  },
  {
    title: "Natural Remedies for Better Sleep",
    views: "156K",
    date: /* @__PURE__ */ new Date("2024-03-13"),
    href: "/articles/natural-sleep-remedies",
    category: "Wellness",
    image: "",
    description: ""
  }
];

const $$TrendingArticles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white p-6 rounded-lg shadow-md"> <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center"> <svg class="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"></path> </svg>
Trending Now
</h2> <div class="space-y-4"> ${trendingArticles.map((article, index) => renderTemplate`<div class="flex items-start gap-4"> <span class="text-2xl font-bold text-gray-300">${index + 1}</span> <div> <a${addAttribute(article.href, "href")} class="text-gray-900 hover:text-emerald-600 font-medium"> ${article.title} </a> <div class="flex items-center gap-3 text-sm text-gray-500 mt-1"> <span>${article.views} views</span> <span>•</span> ${article.date && renderTemplate`${renderComponent($$result, "ArticleDate", $$ArticleDate, { "date": article.date })}`} </div> </div> </div>`)} </div> </div>`;
}, "/home/project/src/components/TrendingArticles.astro", void 0);

const popularTopics = [
  { name: "Weight Loss", href: "/topics/weight-loss", count: 156 },
  { name: "Healthy Recipes", href: "/topics/recipes", count: 142 },
  { name: "Mental Health", href: "/topics/mental-health", count: 98 },
  { name: "Natural Remedies", href: "/topics/natural-remedies", count: 87 },
  { name: "Exercise Tips", href: "/topics/exercise", count: 76 }
];

const $$PopularTopics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white p-6 rounded-lg shadow-md"> <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center"> <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path> </svg>
Popular Topics
</h2> <div class="space-y-3"> ${popularTopics.map((topic) => renderTemplate`<a${addAttribute(topic.href, "href")} class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md group"> <span class="text-gray-700 group-hover:text-emerald-600">${topic.name}</span> <span class="text-sm text-gray-400">${topic.count} articles</span> </a>`)} </div> </div>`;
}, "/home/project/src/components/PopularTopics.astro", void 0);

const $$CategoryGrid = createComponent(($$result, $$props, $$slots) => {
  const categories = [
    {
      name: "Nutrition",
      description: "Healthy eating tips and diet advice",
      icon: "M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10z",
      href: "/nutrition"
    },
    {
      name: "Fitness",
      description: "Workouts and exercise guides",
      icon: "M13 6v18h-2v-18h2zm5 0v18h-2v-18h2zm-10 0v18h-2v-18h2zm-5 0v18h-2v-18h2z",
      href: "/fitness"
    },
    {
      name: "Mental Health",
      description: "Tips for emotional well-being",
      icon: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 3c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z",
      href: "/mental-health"
    },
    {
      name: "Wellness",
      description: "Holistic health and lifestyle",
      icon: "M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z",
      href: "/wellness"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"> ${categories.map((category) => renderTemplate`<a${addAttribute(category.href, "href")} class="group"> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"> <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors"> <svg class="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24"> <path${addAttribute(category.icon, "d")}></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2">${category.name}</h3> <p class="text-gray-600 text-sm">${category.description}</p> </div> </a>`)} </div>`;
}, "/home/project/src/components/CategoryGrid.astro", void 0);

const $$Astro$3 = createAstro();
const $$SocialShare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SocialShare;
  const { url, title } = Astro2.props;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  return renderTemplate`${maybeRenderHead()}<div class="flex space-x-4 items-center"> <span class="text-gray-600">Share:</span> <a${addAttribute(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, "href")} target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-500"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.58v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"></path> </svg> </a> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-700"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"></path> </svg> </a> <a${addAttribute(`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, "href")} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:text-blue-800"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> </div>`;
}, "/home/project/src/components/SocialShare.astro", void 0);

const $$Astro$2 = createAstro();
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { title, description, image, category, href, date } = Astro2.props;
  const baseUrl = "https://doorillio.com" ;
  const fullUrl = `${baseUrl}${href}`;
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;
  const formattedDate = date ? new Date(date).toLocaleDateString() : null;
  return renderTemplate`${maybeRenderHead()}<article class="bg-white rounded-lg shadow-md overflow-hidden h-full"> <img${addAttribute(imageUrl, "src")}${addAttribute(title, "alt")} class="w-full h-48 object-cover" loading="lazy" decoding="async"> <div class="p-6"> <span class="text-emerald-600 text-sm font-medium">${category}</span> <h3 class="text-xl font-bold text-gray-900 mt-2"> <a${addAttribute(href, "href")} class="hover:text-emerald-600"> ${title} </a> </h3> <p class="text-gray-600 mt-2">${description}</p> ${formattedDate && renderTemplate`<time${addAttribute(new Date(date).toISOString(), "datetime")} class="text-sm text-gray-500 mt-2 block"> ${formattedDate} </time>`} <div class="mt-4 flex items-center justify-between"> <a${addAttribute(href, "href")} class="text-emerald-600 hover:text-emerald-700">
Read More →
</a> ${renderComponent($$result, "SocialShare", $$SocialShare, { "url": fullUrl, "title": title })} </div> </div> </article>`;
}, "/home/project/src/components/ArticleCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$AdPlacement = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AdPlacement;
  const { slot, class: className = "" } = Astro2.props;
  const adSizes = {
    "sidebar": "min-h-[250px] w-full",
    "in-content": "min-h-[280px] w-full",
    "banner": "min-h-[90px] w-full"
  };
  return renderTemplate(_a || (_a = __template(["", "<div", '> <div class="text-center p-4"> <div class="text-sm text-gray-500">Advertisement</div> <!-- Ad placement container --> <div', ' class="w-full h-full"> <!-- Ad code will be injected here --> </div> </div> </div> <script>(function(){', "\n// Placeholder for ad initialization\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Initialize ads when the component mounts\n  // This is where you would put your actual ad code\n  console.log(`Ad slot ${slot} ready for initialization`);\n});\n})();<\/script>"], ["", "<div", '> <div class="text-center p-4"> <div class="text-sm text-gray-500">Advertisement</div> <!-- Ad placement container --> <div', ' class="w-full h-full"> <!-- Ad code will be injected here --> </div> </div> </div> <script>(function(){', "\n// Placeholder for ad initialization\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Initialize ads when the component mounts\n  // This is where you would put your actual ad code\n  console.log(\\`Ad slot \\${slot} ready for initialization\\`);\n});\n})();<\/script>"])), maybeRenderHead(), addAttribute(["bg-gray-100 flex items-center justify-center", adSizes[slot], className], "class:list"), addAttribute(`ad-${slot}`, "id"), defineScriptVars({ slot }));
}, "/home/project/src/components/AdPlacement.astro", void 0);

const $$Astro = createAstro();
const $$InfiniteScroll = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InfiniteScroll;
  const { initialArticles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="infinite-scroll-container"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" id="articles-container"> ${initialArticles.map((article, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ArticleCard", $$ArticleCard, { ...article })} ${(index + 1) % 6 === 0 && renderTemplate`<div class="md:col-span-2"> ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "slot": "in-content" })} </div>`}` })}`)} </div> <div class="loading-spinner hidden mt-8 text-center"> <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-600 border-r-transparent"></div> </div> </div> `;
}, "/home/project/src/components/InfiniteScroll.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metaDescription = "Discover science-backed health tips, nutrition advice, and wellness strategies for a better you. Expert advice on fitness, mental health, and holistic well-being.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Your Guide to a Healthier Life", "description": metaDescription }, { "banner": ($$result2) => renderTemplate`${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "slot": "banner", "class": "mb-8" })}`, "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<div class="mb-12"> <h1 class="text-4xl font-bold text-gray-900 text-center mb-4">
Your Guide to a Healthier Life
</h1> <p class="text-xl text-gray-600 text-center max-w-2xl mx-auto"> ${metaDescription} </p> </div> ${renderComponent($$result2, "CategoryGrid", $$CategoryGrid, {})} <div class="grid grid-cols-1 lg:grid-cols-12 gap-8"> <div class="lg:col-span-8"> <section class="mb-12"> ${renderComponent($$result2, "FeaturedArticle", $$FeaturedArticle, { ...featuredArticle })} </section> <section> <div class="flex items-center justify-between mb-8"> <h2 class="text-2xl font-bold text-gray-900">Latest Articles</h2> <a href="/articles" class="text-emerald-600 hover:text-emerald-700">
View All Articles →
</a> </div> ${renderComponent($$result2, "InfiniteScroll", $$InfiniteScroll, { "initialArticles": latestArticles })} </section> </div> <aside class="lg:col-span-4 space-y-8"> ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "slot": "sidebar" })} ${renderComponent($$result2, "TrendingArticles", $$TrendingArticles, {})} ${renderComponent($$result2, "PopularTopics", $$PopularTopics, {})} ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "slot": "sidebar" })} </aside> </div> ` })}`;
}, "/home/project/src/pages/index.astro", void 0);

const $$file = "/home/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
