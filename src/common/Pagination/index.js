import React from "react";
import {
  Wrapper,
  Group,
  Button,
  Info,
  DesktopLabel,
  MobileLabel,
  Icon,
} from "./styled";

const Chevron = ({ direction = "left", color }) => (
  <Icon
    viewBox="0 0 7 11"
    aria-hidden="true"
    focusable="false"
    $direction={direction}
    $color={color}
  >
    <path
      d="M6 1L1 5.5L6 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

const DoubleChevron = ({ direction = "left", color }) => (
  <>
    <Chevron direction={direction} color={color} />
    <Chevron direction={direction} color={color} />
  </>
);

export const Pagination = ({ page, totalPages, onPageChange }) => {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <Wrapper>
      <Group>
        <Button
          disabled={isFirstPage}
          onClick={() => onPageChange(1)}
        >
          <DesktopLabel>
            <Chevron direction="left" />
            First
          </DesktopLabel>
          <MobileLabel>
            <Chevron direction="left" />
          </MobileLabel>
        </Button>

        <Button
          disabled={isFirstPage}
          onClick={() => onPageChange(page - 1)}
        >
          <DesktopLabel>
            <Chevron direction="left" />
            Previous
          </DesktopLabel>
          <MobileLabel>
            <Chevron direction="left" />
          </MobileLabel>
        </Button>
      </Group>

      <Info>
        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
      </Info>

      <Group>
        <Button
          $primary
          disabled={isLastPage}
          onClick={() => onPageChange(page + 1)}
        >
          <DesktopLabel>
            Next
            <Chevron direction="right" color="rgba(0, 68, 204, 1)" />
          </DesktopLabel>
          <MobileLabel>
            <Chevron direction="right" color="rgba(0, 68, 204, 1)" />
          </MobileLabel>
        </Button>

        <Button
          $primary
          disabled={isLastPage}
          onClick={() => onPageChange(totalPages)}
        >
          <DesktopLabel>
            Last
            <Chevron direction="right" color="rgba(0, 68, 204, 1)" />
          </DesktopLabel>
          <MobileLabel>
            <Chevron direction="right" color="rgba(0, 68, 204, 1)" />
          </MobileLabel>
        </Button>
      </Group>
    </Wrapper>
  );
};
