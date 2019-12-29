/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import { Editor, Text } from "tiptap";
import {
  HardBreak,
  Heading,
  Code,
  Link,
  BulletList,
  OrderedList,
  ListItem,
  Blockquote,
  CodeBlock,
  CodeBlockHighlight,
  HorizontalRule,
  History
} from "tiptap-extensions";
import { buildPlugin, nodes as rpNodes } from "@reactivepad/prosemirror";
import { Strong, Italic, Strike } from "./marks";
import { Image, PlainTextDocument } from "./nodes";

const oldCreateNodes = Editor.prototype.createNodes;
Editor.prototype.createNodes = function() {
  const nodes = oldCreateNodes.apply(this, arguments);
  return { ...nodes, ...rpNodes };
};

const oldCreatePlugins = Editor.prototype.createPlugins;
Editor.prototype.createPlugins = function() {
  const plugins = oldCreatePlugins.apply(this, arguments);
  return [...plugins, ...this.options.proseMirrorPlugins];
};

const loadSyntaxHighlight = async language => {
  const languages = [language];
  let modules = {};
  for (let i = 0; i < languages.length; i++) {
    try {
      const lang = await import(/* webpackChunkName: "highlight/[request]" */ "highlight.js/lib/languages/" +
        languages[i]);
      modules[languages[i]] = lang.default;
    } catch (e) {
      // No matching highlighing found, fallback to none
      return undefined;
    }
  }
  if (Object.keys(modules).length === 0 && modules.constructor === Object) {
    return undefined;
  }
  return { languages: modules };
};

const createEditor = ({
  content,
  onInit,
  onUpdate,
  extensions,
  enableRichEditing,
  languages
}) => {
  let richEditingExtensions = [];
  if (enableRichEditing) {
    richEditingExtensions = [
      new Heading(),
      new Code(),
      new Strong(),
      new Italic(),
      new Strike(),
      new HardBreak(),
      new HorizontalRule(),
      new BulletList(),
      new OrderedList(),
      new Blockquote(),
      new CodeBlock(),
      new ListItem(),
      new Link(),
      new Image()
    ];
  } else {
    richEditingExtensions = [
      new PlainTextDocument(),
      new Text(),
      new CodeBlockHighlight({
        ...languages
      })
    ];
  }
  extensions = extensions || [];
  const rpPlugin = buildPlugin();
  return new Editor({
    content: content,
    onInit: onInit,
    onUpdate: onUpdate,
    extensions: [...richEditingExtensions, new History()].concat(extensions),
    useBuiltInExtensions: enableRichEditing,
    proseMirrorPlugins: [rpPlugin.plugin]
  });
};

export default createEditor;
export {
  createEditor,
  loadSyntaxHighlight
};
