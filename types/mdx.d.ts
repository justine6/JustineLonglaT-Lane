declare module "*.mdx" {
  export const meta: Record<string, any> | undefined;
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
