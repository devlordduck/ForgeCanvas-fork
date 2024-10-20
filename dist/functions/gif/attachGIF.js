"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const discord_js_1 = require("discord.js");
exports.default = new forgescript_1.NativeFunction({
    name: '$attachGIF',
    aliases: ['$sendGIF', '$renderGIF', '$gifRender'],
    description: 'Attaches the gif.',
    version: '1.1.0',
    brackets: true,
    unwrap: true,
    args: [
        {
            name: 'gif',
            description: 'Name of the gif.',
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: 'filename',
            description: 'The name of the gif to be attached as.',
            type: forgescript_1.ArgType.String,
            required: false,
            rest: false
        }
    ],
    async execute(ctx, [name, filename]) {
        const gif = ctx.gifManager?.get(name);
        if (!gif)
            return this.customError('No gif.');
        ctx.container.files.push(new discord_js_1.AttachmentBuilder(Buffer.from([...gif.out.getData(), 0x3b]), {
            name: `${filename ?? name}.gif`
        }));
        return this.success();
    }
});
//# sourceMappingURL=attachGIF.js.map