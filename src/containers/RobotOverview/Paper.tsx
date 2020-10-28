import React from 'react';

import { Container, PaperName, Separator, Transactions } from './PaperStyles';

interface PaperProps {
  paper: string;
  transactions: number;
}

/**
 * Render a paper information
 * @param paper Name of the paper
 * @param transactions Number of transactions
 */
const Paper: React.FC<PaperProps> = ({ paper, transactions }: PaperProps) => {
  return (
    <Container>
      <PaperName>
        <span>{paper}</span>
      </PaperName>
      <Separator />
      <Transactions>
        <span>{transactions}</span>
        <span>{transactions === 1 ? 'transação' : 'transações'}</span>
      </Transactions>
    </Container>
  );
};

export default Paper;
