/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from '@testing-library/react'
import { UltimateButton } from './UltimateButton'

describe("UltimateButton", () => {
  it("should render some text", async () => {

    render(
      <UltimateButton>
        Hi there!
      </UltimateButton>
    );

    const button = await waitFor(() => screen.getByText('Hi there!'))

    expect(button).toBeVisible()

  })
})