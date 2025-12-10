import React from "react";
import {
  Wrapper,
  Group,
  Button,
  Info,
  DesktopLabel,
  MobileLabel,
} from "./styled";

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
          <DesktopLabel>‹ First</DesktopLabel>
          <MobileLabel>««</MobileLabel>
        </Button>

        <Button
          disabled={isFirstPage}
          onClick={() => onPageChange(page - 1)}
        >
          <DesktopLabel>‹ Previous</DesktopLabel>
          <MobileLabel>«</MobileLabel>
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
          <DesktopLabel>Next ›</DesktopLabel>
          <MobileLabel>»</MobileLabel>
        </Button>

        <Button
          $primary
          disabled={isLastPage}
          onClick={() => onPageChange(totalPages)}
        >
          <DesktopLabel>Last ›</DesktopLabel>
          <MobileLabel>»»</MobileLabel>
        </Button>
      </Group>
    </Wrapper>
  );
};
