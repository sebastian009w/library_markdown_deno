export class Dev {
  is_directory(pathname: string): boolean {
    const state = Deno.statSync(pathname);
    return state.isDirectory;
  }
  read_directory(pathname: string): Iterable<Deno.DirEntry> {
    const content = Deno.readDirSync(pathname);
    return content;
  }
}
