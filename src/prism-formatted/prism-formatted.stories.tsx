import { Meta, StoryObj } from "@storybook/react";

import { PrismFormatted } from "./prism-formatted";

const story = {
	title: "Components/PrismFormatted",
	component: PrismFormatted,
} satisfies Meta<typeof PrismFormatted>;

type Story = StoryObj<typeof PrismFormatted>;

const text = `<p>Given the following code:</p>
<pre><code class="language-python">temp = "5 degrees"
cel = 0
fahr = float(temp)
cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)
</code></pre>
<p>Which line/lines should be surrounded by <code>try</code> block?</p>`;

export const Default: Story = {
	args: {
		text,
		getCodeBlockAriaLabel: (codeName) => `${codeName} code example`,
	},
};

export const WithLineNumbers: Story = {
	args: {
		text,
		getCodeBlockAriaLabel: (codeName) => `${codeName} code example`,
		hasLineNumbers: true,
	},
};

export default story;
