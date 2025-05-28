import vue from '@vitejs/plugin-vue';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { merge } from 'lodash-es';
import { NodeTypes } from '@vue/compiler-core';
export function vueWithComponentIds(options = {}) {
    const idMapPath = options.idMapPath || './component-id-map.json';
    let idMap = {};
    if (fs.existsSync(idMapPath)) {
        idMap = JSON.parse(fs.readFileSync(idMapPath, 'utf-8'));
    }
    function getOrCreateId(filePath) {
        if (!idMap[filePath]) {
            const hash = crypto.createHash('md5').update(filePath).digest('hex');
            idMap[filePath] = hash;
            fs.writeFileSync(idMapPath, JSON.stringify(idMap, null, 2));
        }
        return idMap[filePath];
    }
    function createDataComponentIdTransform(componentId) {
        return (node, _context) => {
            if (node.type === NodeTypes.ELEMENT && !node.tag.startsWith('svg')) {
                if (!node.props.some(p => p.type === 6 && p.name === 'data-component-id')) {
                    node.props.push({
                        type: 6,
                        name: 'data-component-id',
                        value: {
                            type: 2,
                            content: componentId,
                            loc: node.loc,
                        },
                        loc: node.loc,
                        nameLoc: node.loc,
                    });
                }
            }
        };
    }
    return vue(merge({}, options.vueOptions || {}, {
        template: {
            compilerOptions: {
                nodeTransforms: [
                    (node, context) => {
                        const filename = context.filename;
                        const id = getOrCreateId(path.relative(process.cwd(), filename));
                        return createDataComponentIdTransform(id)(node, context);
                    },
                ],
            },
        },
    }));
}
